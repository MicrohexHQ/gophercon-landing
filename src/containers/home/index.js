import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'
import PageHead from '@/components/PageHead'
import HeroBanner from './HeroBanner'
import Conference from './Conference'
import Workshop from './Workshop'
import Speakers from './Speakers'
import Sponsors from './Sponsors'
import Venue from './Venue'

const Home = () => (
  <DefaultLayout>
    <PageHead />
    <HeroBanner />
    <Conference />
    <Speakers />
    <Sponsors />
    <Venue />
    <Workshop />
  </DefaultLayout>
)

export default Home
