export default function MaintenancePage() {
  return (
    <main className="maintenance-screen">
      <section className="maintenance-card" aria-labelledby="maintenance-title">
        <div className="maintenance-road-sign" aria-hidden="true">
          <svg viewBox="0 0 160 112" role="presentation">
            <path className="road-sign-post" d="M30 103h100" />
            <path className="road-sign-board" d="M19 12h122v62H19z" />
            <path className="road-sign-stripe" d="m24 66 47-51m-16 57 53-57m-16 59 41-44" />
            <path className="road-sign-text" d="M42 38h76M42 51h57" />
          </svg>
        </div>
        <p className="maintenance-eyebrow">TEMPORARILY UNAVAILABLE</p>
        <h1 id="maintenance-title">Work in Progress</h1>
        <p className="maintenance-copy">
          This portfolio is being updated. Please check back soon.
        </p>
        <span className="maintenance-status">
          <span className="maintenance-status-dot" />
          Updates in progress
        </span>
      </section>
      <p className="maintenance-footer">Shubhang Dhawan <span>·</span> Portfolio</p>
    </main>
  );
}
