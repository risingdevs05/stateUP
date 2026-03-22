export default function Footer() {
  return (
    <footer className="bg-surface-container-high border-t-4 border-surface-variant">
      <div className="grid md:grid-cols-2 gap-8 px-16 py-12">
        
        <div>
          <h2 className="text-xl font-semibold text-tertiary">
            Uttar Pradesh Tourism
          </h2>
          <p className="text-sm uppercase mt-4 text-primary">
            © 2024 Department of Tourism
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Culture Dept</a>
          <a href="#">Contact</a>
        </div>

      </div>
    </footer>
  );
}