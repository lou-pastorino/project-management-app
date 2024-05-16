import femaleProfilePic from "./images/female-employee-icon.webp";
import maleProfile from "./images/maleProfile.jpg";
import maleProfilePic from "./images/male-employee-icon.webp";

export default function TeamMemberCard({ employee, selectedTeam, handleEmployeeCardClick }) {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "male" ? (
        <img src={maleProfilePic} className="card-img-top" />
      ) : (
        <img src={femaleProfilePic} className="card-img-top" />
      )}

      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
}
