import React from 'react';
import { Card } from 'antd';

type ReportCardProps = {
  name: string;
  summary: string;
};

export const ReportCard = ({ name, summary }: ReportCardProps) => {
  return (
    <Card title={name} style={{ width: '400px' }} hoverable={true}>
      {summary}
    </Card>
  );
};
