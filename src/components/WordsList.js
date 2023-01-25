import but from "../image/Union.png";

const WordsList = ({ list, remove }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list">
          {list.map((entry, index) => (
            <div className="todo">
              <li className="text" key={index}>
                {" "}
                {entry}{" "}
              </li>

              <button
                className="delete-button"
                onClick={() => {
                  remove(entry);
                }}
              >
                <img src={but} />
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>
        </div>
      )}
    </>
  );
};

export default WordsList;
