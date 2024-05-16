import Teams from "./Teams";
import TeamMemberCard from "./TeamMemberCard";
import TeamMembers from "./TeamMembers";

export default function Employees({ employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange }) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <p>Choose the team you wish to build using the dropdown below</p>
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              handleEmployeeCardClick={handleEmployeeCardClick}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
