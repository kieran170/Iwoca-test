import React, { useEffect } from 'react';
import SingleApplication from './SingleApplication';
import styles from './Applications.module.css';
import { useFetchApplications } from './hooks/useFetchApplications';
import { Button } from './ui/Button/Button';

const Applications = () => {
  const {
    applications,
    error,
    fetchAdditionalApplications,
    fetchApplications,
    loading,
  } = useFetchApplications();

  useEffect(() => {
    fetchApplications();
  }, []);

  if (loading) {
    return (
      <div className={styles.Loading}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.Applications}>
      {error && (
        <div>
          <p>There has been an error please try again</p>
        </div>
      )}

      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}

      {applications &&
        applications.map((application, i) => {
          return <SingleApplication key={i} application={application} />;
        })}
      <Button onClick={fetchAdditionalApplications} className={styles.Button}>
        {error ? 'Try again' : 'Load more'}
      </Button>
    </div>
  );
};

export default Applications;
