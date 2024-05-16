export default function Header({ selectedTeam, teamMemberCount }) {
  return (
    <>
      <header className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <h1>RocketStack Team Builder</h1>
            <p>Choose the team you wish to build using the dropdown below</p>
            <h3>
              {selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "Member" : "Members"}
            </h3>
          </div>
        </div>
      </header>
    </>
  );
}
