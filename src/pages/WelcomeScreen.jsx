import Button from '../components/Button';

export default function WelcomeScreen({ onNavigate }) {
    return (
        <div className="flex h-full w-full flex-col justify-end px-5 pb-9 bg-bg-main text-text-main font-rubik">

            
            <div className="mb-8">
                
                <h1 className="text-[28px] font-bold text-text-main tracking-tight mb-2 leading-tight ">
                    Welcome to PopX
                </h1>
                
                <p className="text-[18px] text-gray-500 font-normal leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
            </div>

         
            <div className="flex flex-col gap-3">
                <Button
                    label="Create Account"
                    variant="primary"
                    onClick={() => onNavigate('register')}
                />
                <Button
                    label="Already Registered? Login"
                    variant="secondary"
                    onClick={() => onNavigate('login')}
                />
            </div>

        </div>
    );
}