import React from 'react';
import styles from './SingleApplication.module.css';

const SingleApplication = ({ application }) => {
  const formattedAmount = application.loan_amount.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  });

  const formatDate = (unformattedDate: string) => {
    const dateObject = new Date(unformattedDate);

    const day = dateObject.getUTCDate();
    const month = dateObject.getUTCMonth() + 1;
    const year = dateObject.getUTCFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

    return formattedDate;
  };

  const formattedCreatedDate = formatDate(application.date_created);
  const formattedExpiryDate = formatDate(application.date_created);

  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub className={styles.email}>Email</sub>
        {application.email}
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        {formattedAmount}
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        {formattedCreatedDate}
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        {formattedExpiryDate}
      </div>
    </div>
  );
};

export default SingleApplication;
