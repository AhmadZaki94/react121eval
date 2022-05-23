import styles from "./CandidateCard.module.css";

function CandidateCard({ list }) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={list.avatar} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name: {list.name}</div>
        <div>Title & Company Name: {list.company_name}</div>
      </div>
      <div>$ Salary: {list.salary}</div>
    </div>
  );
}

export default CandidateCard;