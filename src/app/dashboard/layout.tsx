"use client"
import '../globals.css'
import PageSkeleton from '../../components/pageSkeleton/pageSkeleton'

export default function RootLayout({children}) {
  return (
    <>
      <PageSkeleton>
        {children}
      </PageSkeleton>

    </>   

  )
}
