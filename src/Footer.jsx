export default function Footer() {
  var today = new Date();

  return (
    <footer className="container footer">
      <div className="row justify-content-center">
        <div className="col-8">
          <p>RocketStack Team Builder - {today.getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
