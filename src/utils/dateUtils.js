export const getDateTime = () => {
  const date = new Date();
  // const hour = date.getHours();
  // const minute = date.getMinutes();
  // const second = date.getSeconds();
  // const ampm = hour <= 12 ? "오전" : "오후";
  // const time = " " + ampm + " " + hour + ":" + minute + ":" + second;

  return {
    sendTime: date.getTime(),
    date: new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date()),
  };
};
