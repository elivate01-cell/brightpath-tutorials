import { useState } from 'react';

const TIMETABLE: Array<{ day: string; slots: string[] }> = [
  { day: 'Monday', slots: ['Maths', 'English', 'Physics', '—'] },
  { day: 'Tuesday', slots: ['Chemistry', 'Maths', 'Yorùbá', '—'] },
  { day: 'Wednesday', slots: ['Biology', 'English', 'Economics', '—'] },
  { day: 'Thursday', slots: ['Maths', 'Government', 'Literature', '—'] },
  { day: 'Friday', slots: ['Mock exams', 'Q&A clinic', 'Q&A clinic', '—'] },
  { day: 'Saturday', slots: ['JAMB drills', 'JAMB drills', '—', '—'] },
];

const TRACKS = [
  { n: 'WAEC track', body: 'Five core subjects, past papers since 2015, marking-scheme drills every Friday.', len: 'Sep–May · 2 evenings' },
  { n: 'JAMB sprint', body: 'Six Saturdays of CBT practice on the centre’s own terminals, then four mocks.', len: 'Feb–Apr · Saturdays' },
  { n: 'Common Entrance lift', body: 'For the primaries: mental maths, comprehension, and exam-day manners.', len: 'Year round · Sundays' },
];

const FAQ = [
  ['What is the class size, truly?', 'Fifteen. When a class reaches sixteen, it splits and we hire. This rule has outlived three landlords.'],
  ['Do you teach phonics for younger children?', 'Yes — the 4–6 pm shift handles ages 7–11 separately from the seniors, in the front room.'],
  ['Can fees be paid in parts?', 'Twice a term without penalty. The ledger keeps it simple: part one at resumption, part two by midterm.'],
  ['Is there a trial class?', 'Two free sessions for every new student. Bring the last test result; we start from the wound, not the textbook.'],
];
export default function App() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bp">
      <div className="top">
        <a className="brand" href="#top">Bright<span>Path</span> <small>Tutorials</small></a>
        <nav className="tnav">
          <a href="#timetable">Timetable</a><a href="#tracks">Exam tracks</a><a href="#fees">Fees</a><a href="#faq">Parents’ FAQ</a>
        </nav>
        <a className="tcta" href="#register">Register</a>
      </div>
      <header className="hero" id="top">
        <p className="kick">AFTER-SCHOOL &amp; EXAM PREP · IBADAN · AGODI GATE</p>
        <h1>Fifteen chairs,<br /><em>every subject</em>, one promise.</h1>
        <p className="lede">Classes of fifteen, teachers who mark with red and stay for questions, and a results board that is not shy.</p>
        <div className="hbtns">
          <a className="btn solid" href="#register">Two free trial classes</a>
          <a className="btn ghost" href="#timetable">See the week</a>
        </div>
      </header>
      <section className="promise">
        <div className="pin">
          <b>15</b>
          <div><h3>The class-size promise</h3><p>No class exceeds fifteen students. When it does, it splits and we hire — this rule has outlived three landlords and one flood.</p></div>
        </div>
      </section>
      <section className="timetable" id="timetable">
        <div className="tt-head"><h2>The week at BrightPath</h2><p>Evenings 4–8 PM · Saturdays 9 AM–2 PM.</p></div>
        <div className="ttgrid">
          {TIMETABLE.map((d) => (
            <div className="ttcol" key={d.day}>
              <b className="ttday">{d.day}</b>
              {d.slots.map((s, i) => (
                <span key={i} className={s === '—' ? 'ttempty' : 'ttslot'}>{s}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="tracks" id="tracks">
        <h2>Exam-prep tracks</h2>
        <div className="trgrid">
          {TRACKS.map((t) => (
            <article className="trcard" key={t.n}>
              <h3>{t.n}</h3>
              <p>{t.body}</p>
              <span className="trlen">{t.len}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="results">
        <div className="rband">
          <div><b>92%</b><span>WAEC credit in five papers (last three sittings)</span></div>
          <div><b>210+</b><span>average JAMB score, sprint cohort</span></div>
          <div><b>31</b><span>students into federal schools this year</span></div>
        </div>
      </section>
      <section className="fees" id="fees">
        <h2>Fees, plainly</h2>
        <table className="feestable">
          <thead><tr><th>Programme</th><th>Per term</th><th>Payment</th></tr></thead>
          <tbody>
            <tr><td>After-school (any 2 subjects)</td><td>₦35,000</td><td>Twice a term</td></tr>
            <tr><td>After-school (3+ subjects)</td><td>₦48,000</td><td>Twice a term</td></tr>
            <tr><td>WAEC track</td><td>₦60,000</td><td>Monthly instalments</td></tr>
            <tr><td>JAMB sprint</td><td>₦40,000</td><td>Once, at registration</td></tr>
            <tr><td>Common Entrance lift</td><td>₦25,000</td><td>Monthly</td></tr>
          </tbody>
        </table>
      </section>
      <section className="faq" id="faq">
        <h2>Parents’ FAQ</h2>
        {FAQ.map((f) => (
          <details key={f[0]}>
            <summary>{f[0]}</summary>
            <p>{f[1]}</p>
          </details>
        ))}
      </section>
      <section className="register" id="register">
        <div className="regin">
          <div>
            <h2>Register a child</h2>
            <p className="reglede">Or come and see the room first — the door is open during class hours, and the chairs are numbered anyway.</p>
          </div>
          {sent ? (
            <div className="regsent">Registration received. The front desk calls within a day to fix the trial classes.</div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <label>Parent’s name<input required placeholder="Your name" /></label>
              <label>Child’s class<select required defaultValue="">
                <option value="" disabled>Choose</option>
                <option>Primary 4–6</option><option>JS 1–3</option><option>SS 1–3</option><option>Exam sprint only</option>
              </select></label>
              <label>Subjects needed<input required placeholder="e.g. Maths, Physics, English" /></label>
              <button type="submit">Send registration</button>
            </form>
          )}
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} BrightPath Tutorials · Agodi Gate, Ibadan.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}