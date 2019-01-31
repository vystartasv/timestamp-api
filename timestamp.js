exports.timeStamp = (input) => {

var c = new Date();
var time = {"error":"Invalid Date"};

if (input === undefined){
  time = {"unix":Date.parse(c),"utc":c.toUTCString()};
} else if (!isNaN(input)){
  c.setTime(input);
  time = {"unix":input,"utc":c.toUTCString()};
} else if (!isNaN(new Date(input).getTime())){
  c = new Date(input);
  time = {"unix":Date.parse(c),"utc":c.toUTCString()};
}

return time;
};
