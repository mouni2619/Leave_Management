import { Tabs } from 'antd';

// Components
import MyAbsenceTabContent from './components/MyAbsenceTabContent';

const itemsintab = [
  {
    key: '1',
    label: <span className="">My Absences</span>,
    children: <MyAbsenceTabContent />,
  },
  {
    key: '2',
    label: 'Absences Calender',
  },
];

/**
 * Dashboard List Page
 */
export default function DashboardListPage() {
  return <Tabs defaultActiveKey="1" items={itemsintab} />;
}
