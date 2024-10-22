import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn ={ firstName: 'Luis', lastName: 'Ozd', email: 'luiscode28@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext ="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>

        RECENT TRANSACTONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 123.50 }, { currentBalance: 500.12 }]}
      
      />
    </section>
  )
}

export default Home