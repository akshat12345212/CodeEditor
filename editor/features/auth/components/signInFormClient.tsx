import {
    Card, CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { FcGoogle as Google } from "react-icons/fc";
import { FaGithub as Github } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { signIn } from '@/auth';

async function handleGoogleSignIn() {
    "use server"
    await signIn("google")
}

async function handleGithubSignIn() {
    "use server"
    await signIn("github")
}

export const SignInFormClient = () => {
    return (
        <div className="flex items-center justify-center min-h-full p-4 perspective-[1000px]">
            {/* Main 3D Card Container */}
            <Card className="w-full max-w-md relative overflow-hidden bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-gray-700/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-[2rem] transform hover:-translate-y-2 hover:shadow-[0_40px_60px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_40px_60px_-15px_rgba(0,0,0,0.6)] z-10">
                
                {/* Animated Background Glowing Orbs */}
                <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

                <CardHeader className='space-y-4 pt-10 pb-6 relative z-10'>
                    {/* Animated Emoticon/Logo bubble */}
                    <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-[1.5rem] shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)] flex items-center justify-center transform transition-transform hover:scale-110 hover:rotate-12 duration-500 bg-opacity-50">
                        <span className='text-6xl filter drop-shadow-md m-0 p-0 leading-none'>
                            🔒
                        </span>
                    </div>
                    <div className="space-y-1.5">
                        <CardTitle className='text-3xl font-extrabold text-center tracking-tight text-gray-900 dark:text-white'>
                            Welcome Back
                        </CardTitle>
                        <CardDescription className='text-center text-[15px] text-gray-500 dark:text-gray-400 font-medium px-4'>
                            Sign in to your account using one of the providers below.
                        </CardDescription>
                    </div>
                </CardHeader>

                <CardContent className='grid gap-5 px-8 relative z-10'>
                    {/* Google Button */}
                    <form action={handleGoogleSignIn} className="group w-full relative">
                        <Button 
                            className='relative w-full h-14 bg-white hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 border-2 border-b-4 border-gray-200 dark:border-gray-700 active:border-b-2 active:translate-y-[2px] rounded-xl transition-all duration-200 flex items-center justify-center font-bold text-lg shadow-sm hover:shadow-md overflow-hidden tracking-wide'
                            type="submit" 
                            variant="outline"
                        >
                            {/* Shining hover sweep effect */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                            
                            <Google className='mr-3 h-6 w-6 z-10 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12 drop-shadow-sm' />
                            <span className='z-10'>Sign in with Google</span>
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative flex justify-center items-center py-2">
                        <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                        <span className="absolute px-4 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl text-xs font-semibold text-gray-400 uppercase tracking-widest rounded-full">
                            or
                        </span>
                    </div>

                    {/* Github Button */}
                    <form action={handleGithubSignIn} className="group w-full relative">
                        <Button 
                            className='relative w-full h-14 bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 border-2 border-b-4 border-gray-950 dark:border-gray-300 active:border-b-2 active:translate-y-[2px] rounded-xl transition-all duration-200 flex items-center justify-center font-bold text-lg shadow-sm hover:shadow-md overflow-hidden tracking-wide'
                            type="submit" 
                            variant="default"
                        >
                            {/* Shining hover sweep effect */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                            
                            <Github className='mr-3 h-7 w-7 z-10 text-white dark:text-gray-900 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 drop-shadow-sm' />
                            <span className='z-10'>Sign in with Github</span>
                        </Button>
                    </form>
                </CardContent>

                {/* Footer Section */}
                <CardFooter className='text-center pb-8 pt-4 px-8 bg-gray-50/50 dark:bg-gray-950/30 border-t border-gray-100 dark:border-gray-800/50 mt-4 relative z-10'>
                    <p className='text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-xs mx-auto text-balance'>
                        By signing in, you agree to our{' '}
                        <a href="#" className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold transition-all hover:underline decoration-2 underline-offset-4 active:scale-95 inline-block'>
                            Terms of Service
                        </a>
                        {' '}and{' '}
                        <a href="#" className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold transition-all hover:underline decoration-2 underline-offset-4 active:scale-95 inline-block'>
                            Privacy Policy
                        </a>.
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignInFormClient
