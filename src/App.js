import './App.css';
import NameAddy from './NameAddy';

function App() {
  let arr = [{
    Name: "Hodan",
    Address: "8551 Fremont ave",
    Senority:"Freshman",
  },{
    Name: "Fahmi",
    Address: "5557 Mlk",
    Senority:"Senior",
  },
  {
    Name: "Rihaal",
    Address: "2394 Bellevue ave",
    Senority:"Sophmore",
  },
  {
    Name: "Rabiic",
    Address: "3393 Lake Washington st",
    Senority:"Junior",
  },
  {
    Name: "Ubah",
    Address: "6262 Tesla rd",
    Senority:"Senior",
  },
  {
    Name: "Rage",
    Address: "1723 Pacific hwy s",
    Senority:"Freshman",
  },
  {
    Name: "Mohamed",
    Address: "24434 Jannah",
    Senority:"Junior",
  },
  {
    Name: "Ibtisam",
    Address: "2020 Turkey st",
    Senority:"Sophmore",
  },
  {
    Name: "Aliyah",
    Address: "1212 Lascaanod ave",
    Senority:"Freshman",
  },
  {
    Name: "Abdirahman",
    Address: "3232 Maple dr",
    Senority:"Freshman  ",
  }]
  var nameLi = arr.map(item => (<NameAddy Name = {item.Name} Address={item.Address} Senority={item.Senority}/>))
  return (
    <div className="App">
      {nameLi}
    </div>
  );
}

export default App;
