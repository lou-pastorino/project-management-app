import { useState } from "react";

export default function GroupedTeamMembers({ employees, selectedTeam, setTeam }) {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    var teams = [];

    var FrontendMembers = employees.filter((employee) => employee.teamName === "Frontend");
    var Frontend = {
      team: "Frontend",
      members: FrontendMembers,
      collapsed: selectedTeam === "Frontend" ? false : true,
    };
    teams.push(Frontend);

    var BackendMembers = employees.filter((employee) => employee.teamName === "Backend");
    var Backend = { team: "Backend", members: BackendMembers, collapsed: selectedTeam === "Backend" ? false : true };
    teams.push(Backend);

    var DatabaseMembers = employees.filter((employee) => employee.teamName === "Database");
    var Database = {
      team: "Database",
      members: DatabaseMembers,
      collapsed: selectedTeam === "Database" ? false : true,
    };
    teams.push(Database);

    var DesignMembers = employees.filter((employee) => employee.teamName === "Design");
    var Design = { team: "Design", members: DesignMembers, collapsed: selectedTeam === "Design" ? false : true };
    teams.push(Design);

    return teams;
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData
    );
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div key={item.team} className=" mt-2" style={{ cursor: "pointer" }}>
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              {item.team} - {employees.filter((employee) => employee.teamName === item.team).length}
            </h4>
            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">Full Name: {member.fullName}</span>
                    </h5>
                    <p>Designation: {member.designation}</p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </main>
  );
}
