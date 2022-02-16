import React from 'react';
import * as S from "./styles";
import { Segment, Table } from 'semantic-ui-react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '../../../elemnet/index';

const data = [
  { name: '2020/01', 방송수익: 300, 음원수익: 456 },
  { name: '2020/02', 방송수익: 145, 음원수익: 230 },
  { name: '2020/03', 방송수익: 100, 음원수익: 345 },
  { name: '2020/04', 방송수익: 8, 음원수익: 450 },
  { name: '2020/05', 방송수익: 100, 음원수익: 321 },
  { name: '2020/06', 방송수익: 9, 음원수익: 235 },
  { name: '2020/07', 방송수익: 53, 음원수익: 267 },
];

const MyFundingArtist = () => {

  return (
    <S.MyFundingArtist>
      <Segment>
        <h3> 아티스트 정보 </h3>
        <Button content={"상세보기"} primary={true} />
      </Segment>
      <Segment>
        <h3> 후원 정보 </h3>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>후원날짜</Table.HeaderCell>
              <Table.HeaderCell>후원금액</Table.HeaderCell>          
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>2020/03/15</Table.Cell>
              <Table.Cell>{Number(100000).toLocaleString()}원</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2020/03/18</Table.Cell>
              <Table.Cell>{Number(300000).toLocaleString()}원</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      <Segment>
        <h3> 수익 </h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke="#000" />
            <Brush dataKey="name" height={30} stroke="#8884d8" />
            <Bar dataKey="방송수익" stackId="a" fill="#8884d8" />
            <Bar dataKey="음원수익" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Segment>
    </S.MyFundingArtist>
  );
};

export default MyFundingArtist;