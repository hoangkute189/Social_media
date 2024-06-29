import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          provident, reiciendis amet qui perferendis sapiente voluptatem
          obcaecati. Sed cum velit accusantium qui autem, repellendus debitis.
        </p>
      </div>
      <div className="messageBottom">8 years ago</div>
    </div>
  );
}
