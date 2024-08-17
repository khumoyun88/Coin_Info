export const data = {
    labels: [
        "08:45 AM", "09:00 AM", "09:15 AM", "09:30 AM", "09:45 AM", "10:00 AM", 
    "10:15 AM", "10:30 AM", "10:45 AM", "11:00 AM", "11:15 AM", "11:30 AM", 
    "11:45 AM", "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM", "01:00 PM", 
    "01:15 PM", "01:30 PM", "01:45 PM", "02:00 PM", "02:15 PM", "02:30 PM", 
    "02:45 PM", "03:00 PM", "03:15 PM", "03:30 PM", "03:45 PM", "04:00 PM", 
    "04:15 PM", "04:30 PM", "04:45 PM", "05:00 PM", "05:15 PM", "05:30 PM", 
    "05:45 PM", "06:00 PM", "06:15 PM", "06:30 PM", "06:45 PM", "07:00 PM", 
    "07:15 PM", "07:30 PM", "07:45 PM", "08:00 PM", "08:15 PM", "08:30 PM", 
    "08:45 PM", "09:00 PM", "09:15 PM", "09:30 PM", "09:45 PM", "10:00 PM", 
    "10:15 PM", "10:30 PM", "10:45 PM", "11:00 PM", "11:15 PM", "11:30 PM", 
    "11:45 PM", "12:00 AM", "12:15 AM", "12:30 AM", "12:45 AM", "01:00 AM", 
    "01:15 AM", "01:30 AM", "01:45 AM", "02:00 AM", "02:15 AM", "02:30 AM", 
    "02:45 AM", "03:00 AM", "03:15 AM", "03:30 AM", "03:45 AM", "04:00 AM", 
    "04:15 AM", "04:30 AM", "04:45 AM", "05:00 AM", "05:15 AM", "05:30 AM", 
    "05:45 AM", "06:00 AM", "06:15 AM", "06:30 AM", "06:45 AM", "07:00 AM", 
    "07:15 AM", "07:30 AM", "07:45 AM", "08:00 AM", "08:15 AM", "08:30 AM"

    ],
    datasets: [
      {
        label: "Price past 1 day",
        data: [

    29500, 29520, 29530, 29490, 29480, 29520, 29550, 29540,
    29560, 29570, 29580, 29540, 29530, 29560, 29590, 29570,
    29550, 29540, 29530, 29520, 29560, 29580, 29590, 29600,
    29610, 29620, 29630, 29640, 29650, 29660, 29670, 29680,
    29690, 29700, 29710, 29720, 29730, 29740, 29750, 29760,
    29770, 29780, 29790, 29800, 29810, 29820, 29830, 29840,
    29850, 29860, 29870, 29880, 29890, 29900, 29910, 29920,
    29930, 29940, 29950, 29960, 29970, 29980, 29990, 30000,
    30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080,
    30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160,
    30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240,
    30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320,
    30330, 30340, 30350, 30360, 30370, 30380, 30390, 30400
        ],
        fill: true,
        tension: 0.4,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    //   {
    //     label: "2024 year",
    //     data: [30, 48, 35, 49, 86, 37, 30],
    //     fill: true,
    //     tension: 0.4,
    //     backgroundColor: "rgba(153,102,255,0.4)",
    //     borderColor: "rgba(153,102,255,1)",
    //   },
    ],
  };
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };
  