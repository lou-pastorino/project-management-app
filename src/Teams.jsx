export default function Teams({ selectedTeam, handleTeamSelectionChange }) {
  return (
    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Database">Database</option>
      <option value="Design">Design</option>
    </select>
  );
}
