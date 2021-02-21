import React from "react";
import "../css/members.css";
/**
 * members data structure
     { id:1,name: "", sum: 0,prod:[] }
 */
const dummyMembers = [
  { id: 1, name: "suvel", sum: 20, prods: ["1☕", "2🍪"] },
  { id: 2, name: "sirenjivee", sum: 10, prods: ["2🍪"] },
];
const Member = ({ id, name, sum, prods }) => {
  return (
    <div class="member">
      <div class="m-info">
        <div class="m-name">{name}</div>
        <div class="m-sum">{sum}</div>
      </div>
      <div class="m-prod">
        {prods.map((p) => (
          <div class="spd">
            <span class="spd-var">{p}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const AddMembersBtn=()=>{
    return <div class="m-add"/>
}
const Members = () => {
  return (
    <div className="members">
      {dummyMembers.map((memProps) => {
        return <Member {...memProps} />;
      })}
      <AddMembersBtn/>
    </div>
  );
};

export default Members;
