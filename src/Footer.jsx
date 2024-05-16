export default function Footer() {
  var today = new Date();

  return (
    <footer className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <h5>Team member allocation App - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  );
}
