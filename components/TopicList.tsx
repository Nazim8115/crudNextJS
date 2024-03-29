import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicList() {
  return (
    <>
      <div className="flex">
        <div>
          <h2>Topic Title</h2>
          <div>Topic discreption</div>
        </div>
        <div className="flex">
          <RemoveBtn />
          <HiPencilAlt size={24} />
        </div>
      </div>
    </>
  );
}
