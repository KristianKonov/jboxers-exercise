import React, { useState } from 'react'
import './student.sass'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import Radio, { RadioProps } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DatePicker from "react-datepicker";
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import './../scores/scores.sass'

import "react-datepicker/dist/react-datepicker.css";
import SortingItem from '../sorting-item';

const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 0 0 1px rgb(16 22 26 / 40%)'
        : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: theme.palette.mode === 'dark' ? '#394b59' : '#f5f8fa',
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
        : 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background:
        theme.palette.mode === 'dark' ? 'rgba(57,75,89,.5)' : 'rgba(206,217,224,.5)',
    },
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });

  function BpRadio(props: RadioProps) {
    return (
      <Radio
        sx={{
          '&:hover': {
            bgcolor: 'transparent',
          },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        {...props}
      />
    );
  }

  export const data = [
    [
      { type: "string", id: "Position" },
      { type: "string", id: "Name" },
      { type: "number", id: "Start" },
      { type: "number", id: "End" },
    ],
    [
      "Goals",
      "50",
      0,
      50,
    ],
    [
      "Goals",
      "32",
      50,
      82,
    ],
    [
      "Goals",
      "20",
      82,
      102,
    ],
    [
      "Reality",
      "25",
      0,
      25,
    ],
    [
      "Reality",
      "18",
      25,
      25+18,
    ],
    [
      "Reality",
      "40",
      25+18,
      25+18+40,
    ],
    [
      "Obstacles",
      "30",
      0,
      30,
    ],
    [
      "Obstacles",
      "10",
      30,
      40,
    ],
    [
      "Obstacles",
      "8",
      40,
      48,
    ],
    [
      "Way Forward",
      "35",
      0,
      35,
    ],
    [
      "Way Forward",
      "9",
      35,
      44,
    ],
    [
      "Way Forward",
      "3",
      44,
      47,
    ]
  ];

const StudentPerformance = () => {
    const [ scoreSort, setScoreSort ] = useState(false)
    const [ sortValue, setSortValue ] = useState('By Score')
    const toggleScoreSorting = () => {
        setScoreSort(!scoreSort)
    }
    const sortHandler = (props) => {
        setSortValue(props)
        setTimeout(() => {
          setScoreSort(!scoreSort)
        },1000)
    }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return(
        <>
            <div className="student-performance">
                <ul className="student-date-sorting">
                    <li className='active'><CalendarMonthIcon /> 7Days</li>
                    <DatePicker className="fromDatePicker" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                    {
                        console.log(startDate.toLocaleString())
                    }
                    <DatePicker className="toDatePicker" selected={endDate} onChange={(date:Date) => setEndDate(date)} />
                </ul>
                <ul className="student-sorting">
                    <li>All Students <KeyboardArrowDownIcon /></li>
                    <div className="student-score-dropdown">
                        <li className={scoreSort ? "flip" : "" } onClick={toggleScoreSorting}>{sortValue} <KeyboardArrowDownIcon /></li>
                        {scoreSort &&
                            <FormControl>
                                <RadioGroup
                                    defaultValue={sortValue}
                                    aria-labelledby="demo-customized-radios"
                                    name="customized-radios"
                                >
                                    <FormControlLabel onClick={() => sortHandler('By Score')} value="score" control={<BpRadio />} label="By Score" />
                                    <FormControlLabel onClick={() => sortHandler('#Sessions')} value="sessions" control={<BpRadio />} label="#Sessions" />
                                    <FormControlLabel onClick={() => sortHandler('#Questions')} value="questions" control={<BpRadio />} label="#Questions" />
                                    <FormControlLabel onClick={() => sortHandler('Session Length')} value="sessionlength" control={<BpRadio />} label="Session Length" />
                                    <button className="sorting-submit">Select</button>
                                </RadioGroup>
                            </FormControl>
                        }
                    </div>
                </ul>
            </div>
            <div className="student-box">
                <h2 className="category-title"><AccountCircleIcon /> Student Performance</h2>
                <SortingItem title="Goals" firstLabel={50} secondLabel={30} thirdLabel={20} flag={true} average={"80%"} />
                <SortingItem title="Reality" firstLabel={25} secondLabel={18} thirdLabel={40} flag={false} average={"52%"} />
                <SortingItem title="Obstacles" firstLabel={30} secondLabel={10} thirdLabel={8} flag={false} average={"83%"} />
                <SortingItem title="Way Forward" firstLabel={35} secondLabel={9} thirdLabel={3} flag={false} average={"94%"} />
                <div className="category-export">
                    <DownloadIcon />
                    <span>
                      Download
                    </span>
                    <PictureAsPdfIcon />
                </div>
            </div>
        </>
    )
}

export default StudentPerformance