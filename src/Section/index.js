import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section>
        <h2 className="section">
            {title}
            {extraHeaderContent}
        </h2>
        {body}
    </section>
);

export default Section;