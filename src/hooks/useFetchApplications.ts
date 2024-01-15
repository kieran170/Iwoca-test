import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { TApplication } from '../types/applicationTypes';

export const useFetchApplications = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [applications, setApplications] = useState<TApplication[] | []>([]);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      setError('');
      const response = await axios.get(
        `http://localhost:3001/api/applications?_page=${page}&_limit=5`
      );

      const newApplications = response.data;

      setApplications([...applications, ...newApplications]);
      setLoading(false);
    } catch (error) {
      setApplications([]);
      setLoading(false);
      setError(error.message);
    }
  };

  const fetchAdditionalApplications = async () => {
    setPage((prevPage) => prevPage + 1);
    await fetchApplications();
  };

  return {
    loading,
    error,
    applications,
    fetchAdditionalApplications,
    fetchApplications,
  };
};
