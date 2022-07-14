export default function App() {
  const values = [
    {
      process_name: "processName1",
      number_of_machines: 10
    },
    {
      process_name: "processName2",
      number_of_machines: 20
    },
    {
      process_name: "processName3",
      number_of_machines: 30
    },
    {
      process_name: "processName4",
      number_of_machines: 40
    },
    {
      process_name: "processName2",
      number_of_machines: 50
    },
    {
      process_name: "processName1",
      number_of_machines: 60
    }
  ];
  const filterArray = values.reduce(function (acc, curr) {
    if (acc[curr.process_name]) {
      acc[curr.process_name] = acc[curr.process_name] + curr.number_of_machines;
    } else {
      acc[curr.process_name] = curr.number_of_machines;
    }
    return acc;
  }, {});
  console.log("filterArray", filterArray);
  var arr = [];
  for (var p in filterArray) {
    arr.push({ key: p, value: filterArray[p] });
  }

  arr.sort(function (a, b) {
    return b.value - a.value;
  });
  var firstThree = arr.slice(0, 3);
  console.log(firstThree);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
