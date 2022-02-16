import React, { useState } from 'react';
import * as S from "./styles";
import { Image, Segment, Progress, Input, Icon, Menu } from 'semantic-ui-react';
import { Button } from '../../../elemnet/index';
import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from 'recharts';

const data = [
  { name: '외주비용', value: 400000 },
  { name: '기타1', value: 300000 },
  { name: '기타2', value: 300000 },
  { name: '기타3', value: 200000 },
];

const data2 = [
  { name: '투자자', value: 80 },
  { name: '아티스트', value: 20 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, payload }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x+10} y={y} fill="white" textAnchor={'middle'} >
      {payload.name}({percent*100}%)
    </text>
  );
};

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
        {`(${value.toLocaleString()})`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"#2185d0"}
      />
    </g>
  );
}

const ArtistFunding = ({history}) => {
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState("없음");

  const onChange = (e, data) => {
    const newValue = data.value;
    if (newValue !== "0" && amount >= 0) {
      setAmount(newValue);
    }
  }

  const handleItemClick = (e, { name }) => {
    if (name === activeMenu) {
      name = "없음";
    } 
    setActiveMenu(name);
  }

  const onPieEnter = (_, index) => {
    setIndex(index);
  };

  return (
    <S.ArtistFunding>
      {false && <S.ArtistFundingImpossible>
        <Image style={{marginTop: "20px", marginBottom: "20px"}} src='../../resources/img/info.png' size='tiny' /> 
        <p>아직 펀딩페이지가 개설되지 않았습니다. </p>
        <p>좋아요가 1000개가 넘는경우 아티스트의 앨범제작을 후원할 수 있습니다.</p>
      </S.ArtistFundingImpossible>}
      <S.ArtistFundingPossible>
        <Segment >
          <h3>목표금액 / 1000만원</h3>  
          <Progress percent={23} color='blue' progress/>
        </Segment> 
        <Segment >
          <h3>앨범펀딩</h3>
          <hr />
          <div style={{paddingTop: "15px"}} >
            <p>앨범상세정보</p>
            <div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart width={400} height={400}>
                  <Pie
                    data={data2}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <h5 style={{textAlign: "center"}}>수익비율</h5>
            </div>
          </div> 
          <div style={{paddingTop: "15px"}}>
            <p>펀딩된 금액은 이렇게 사용됩니다.</p>
            <div className="comment"> 클릭하면 세부내용 확인이 가능합니다 </div>
            <div style={{textAlign: "center", overflowX: "auto", paddingTop: "10px"}}>
              <Menu compact >
                <Menu.Item name="뮤직 비디오" onClick={handleItemClick} active={activeMenu === '뮤직 비디오'}>
                  <Icon name='music' /> <label>뮤직 비디오</label>
                </Menu.Item>
                <Menu.Item name="녹음스튜디오" onClick={handleItemClick} active={activeMenu === '녹음스튜디오'}>
                  <Icon name='microphone' /> <label>녹음스튜디오</label>
                </Menu.Item>
                <Menu.Item name="믹싱&마스터링" onClick={handleItemClick} active={activeMenu === '믹싱&마스터링'}>
                  <Icon name='computer' /> <label>믹싱&마스터링</label>
                </Menu.Item>
                <Menu.Item name="앨범자켓 디자인" onClick={handleItemClick} active={activeMenu === '앨범자켓 디자인'}>
                  <Icon name='circle notch' /> <label>앨범자켓 디자인</label>
                </Menu.Item>
              </Menu>
            </div>
            {activeMenu !== "없음" && <div>
              <h4 style={{paddingTop: "15px",textAlign: "center"}}> { activeMenu } </h4>       
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie
                    activeIndex={index}
                    activeShape={renderActiveShape}
                    data={data}
                    fill="#8884d8"
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={90}
                    onMouseEnter={onPieEnter}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>}
          </div>  
        </Segment> 
        <Segment >
          <h3>펀딩하기</h3>
          <hr />
          <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{alignSelf: "center", padding: "15px"}}>
              <Input style={{width: "120px"}} type="number" onChange={onChange} value={amount} placeholder='금액' />
              <div style={{display: "inline", padding: "10px"}}>
                <Button onClick={() => {if(amount >= 10000) setAmount(Number(amount - 10000));}} icon="minus" color="blue" size="tiny" />
                <Button onClick={() => {setAmount(Number(amount + 10000));}} icon="plus" color="blue" size="tiny" />
              </div>
            </div>
            <div style={{padding: "5px", width: "200px"}}>
              <label style={{position: "relative", top: "5px"}}>사용가능 금액</label> <p style={{display:"inline", position:"relative", float: "right", color: "red", fontSize: "1.5rem"}}>{Number(100000-amount).toLocaleString()}원</p>
            </div> 
            <div style={{padding: "5px", width: "200px"}}>
              <label style={{position: "relative", top: "5px"}}>펀딩금액</label> <p style={{display:"inline", position:"relative", float: "right", color: "red", fontSize: "1.5rem"}}>{Number(amount).toLocaleString()}원</p>
            </div>   
            <div style={{padding: "5px", width: "200px"}}>
              <label style={{position: "relative", top: "5px"}}>예샹수익률</label> <p style={{display:"inline", position:"relative", float: "right", color: "red", fontSize: "1.5rem"}}>8%</p>
            </div>   
            <Button style={{display: "block", width: "200px"}} content="펀딩하기" color="red" />   
          </div>  
        </Segment>
        <Segment >
          <h3>투자시 유의사항</h3>
          <p>1. 유의사항</p>
          <p>2. 유의사항</p>
        </Segment>
      </S.ArtistFundingPossible>
    </S.ArtistFunding>
  );
};

export default ArtistFunding;