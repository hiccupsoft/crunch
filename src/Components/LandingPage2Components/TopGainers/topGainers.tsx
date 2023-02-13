import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import loki from './../../../assets/loki.png'
import usdt from './../../../assets/usdt.png'
import ftm from './../../../assets/ftm.png'
import matic from './../../../assets/matic.png'
import usdc from './../../../assets/usdc.png'
import roadmapBg2 from './../../../assets/roadmapBg2.png'
import { Container, Typography } from '@mui/material'
import './topGainers.css'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import roadmapRight from '../../../assets/roadmapRight.png'
import roadmapRightShadow from '../../../assets/roadmapRightShadow.png'
const rows = [
  {
    tocken: matic,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdc,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdt,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: loki,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: ftm,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdc,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdt,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: loki,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdc,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdt,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: loki,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdc,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdt,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: loki,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdc,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdt,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: loki,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdc,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: usdt,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
  {
    tocken: loki,
    volume: '$178,567,789',
    price: '$2.1',
    dayGainLoss: '7.9%',
    weekGainLoss: '27.9%',
  },
]

export function TopGainers() {
  return (
    <div className="gainers-main relative">
        <img
          src={roadmapRight}
          alt="roadmapRight"
          className="absolute -top-14 right-0"
        />
        <img
          src={roadmapRightShadow}
          alt="roadmapRightShadow"
          className="absolute -top-24 right-0"
        />
      <div className="bgBlue"></div>
      <img
        src={roadmapBg2}
        alt="roadmapBg2"
        className="roadmapBg2 absolute bottom-1/4 right-0 z-0"
      />
      <img
        src={roadmapBg2}
        alt="roadmapBg2"
        className="roadmapBg2 absolute -bottom-40 left-0 z-0"
      />
      <Container maxWidth="xl">
        <h1 className="text-2xl font-semibold mb-5">Top Gainers</h1>
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: 'transparent', boxShadow: '0px 0px 0px' }}
        >
          <Table
            sx={{
              minWidth: 650,
              [`& .${tableCellClasses.root}`]: {
                borderBottom: 'none',
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Token</TableCell>
                <TableCell align="center">Volume 24H</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">24H Gain/Loss</TableCell>
                <TableCell align="right">7D Gain/Loss</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, ind) => (
                <TableRow
                  key={ind + 1}
                  sx={{
                    boxShadow: '0px 0px 0px',
                    backgroundColor: 'transparent',
                    border: '0px',
                  }}
                >
                  <TableCell>
                    <img src={row.tocken} alt={row.tocken} className="w-14" />
                  </TableCell>
                  <TableCell align="center">
                    <p className="py-3 text-lg">{row.volume}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p className="py-3 text-lg">{row.price}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p className="py-3 text-lg">{row.dayGainLoss}</p>
                  </TableCell>
                  <TableCell align="right">
                    <p className="py-3 text-lg">{row.weekGainLoss}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  )
}
