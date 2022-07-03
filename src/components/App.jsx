import { Section } from 'components/Section/Section';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/transactionHistory';

import user from 'components/Profile/user.json';
import friends from 'components/FriendList/friends.json';
import data from 'components/Statistics/data.json';
import transactions from 'components/TransactionHistory/transactions.json';


export const App = () => {
  return (
    <Section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Section>
  );
};
