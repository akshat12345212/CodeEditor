import React from 'react'
import AddNewButtton from '@/features/dashboard/components/add-new-button'
import AddRepoButton from '@/features/dashboard/components/add-repo-button'
import EmptySpace from '@/components/ui/empty-space'

const Page = () => {
  const playground:any []=[];
  return (
    <>
    <div className="flex flex-col justify-start items-center min-h-screen mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        <AddNewButtton/>
        <AddRepoButton/>


      </div>
      <div className ="mt-10 flex flex-col justify-center items-center w-full">
{
  playground && playground.length === 0 ? <EmptySpace title="NO project found " description="Please add a new project to get started." imageSrc="/noproject.webp"/>:
  (
    // add playgroundtable 
   <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex error neque voluptatum exercitationem reiciendis sed voluptas soluta, ad earum eligendi expedita nulla veniam id modi sint laborum placeat dignissimos. Doloremque?</p>
  )
}
      </div>
        </div >
    </>
  )
}

export default Page