import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, 
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle } from '@/components/ui/card'
const page = () => {
  return (
    <div>
 <Card className='flex justify-center m-20 border-0 shadow-none'>
    <CardContent className='flex flex-row items-center justify-center'>
        <div className='bg-green-200 w-[40%] h-[50vh] rounded-l-lg  text-center text-2xl text-white font-bold flex justify-center shadow-lg items-center'>Play</div>
        <div className=' w-[60%] h-[50vh] rounded-r-lg flex flex-col items-center justify-center shadow-lg shadow-t-lg shadow-green-100 border'>
            <Card className='h-[22%] mb-[1%] ml-[1%] rounded-r-lg w-[95%] hover:bg-green-200 border-1 shadow-none'></Card>
            <Card className='h-[22%] mb-[1%] ml-[1%] rounded-r-lg w-[95%] hover:bg-green-200 border-1 shadow-none'></Card>
            <Card className='h-[22%] mb-[1%] ml-[1%] rounded-r-lg w-[95%] hover:bg-green-200 border-1 shadow-none'></Card>
            <Card className='h-[22%] rounded-r-lg ml-[1%] w-[95%] hover:bg-green-200 border-1 shadow-none'></Card>
        </div>
    </CardContent>
 </Card><div className='w-[80vw] flex justify-between mx-4S'> 
<Button>Previous</Button><Button>Next</Button>
</div>
    </div>
  )
}

export default page
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

//  function CardDemo() {
//   return (
//     <Card className="w-full max-w-sm">
//       <CardHeader>
//         <CardTitle>Login to your account</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account
//         </CardDescription>
//         <CardAction>
//           <Button variant="link">Sign Up</Button>
//         </CardAction>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="flex flex-col gap-6">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <a
//                   href="#"
//                   className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
//                 >
//                   Forgot your password?
//                 </a>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex-col gap-2">
//         <Button type="submit" className="w-full">
//           Login
//         </Button>
//         <Button variant="outline" className="w-full">
//           Login with Google
//         </Button>
//       </CardFooter>
//     </Card>
//   )
// }
// export default CardDemo