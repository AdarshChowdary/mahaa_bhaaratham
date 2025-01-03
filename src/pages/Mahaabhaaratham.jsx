import { CircleAlert } from "lucide-react"

const Mahaabhaaratham = () => {
  return (
    <div className="bg-[#1b4965] w-full min-h-[100vh] max-h-fit flex flex-col items-center justify-center py-10 gap-5">
        <CircleAlert width={100} height={100} style={{color:"#bee9e8"}}/>

        <ul className="w-[75%] text-[#62b6cb] font-extralight text-lg list-disc">
            <li>
                <p>वयं वर्तमानकाले महाभारतस्य समग्रं गहनं च अनुभवः प्रदास्यामः।</p>
            </li>
            <li>
                <p>यस्य कृते वयं भवतः धैर्यं च अवग्रहं प्रार्थयामः यः वयं एषः महाकाव्यस्य यात्रा को सुधारितुं प्रयासं करोमः।</p>
            </li>
            <li>
                <p>कृपया, आमन्त्रयामः युष्माकं <span className="italic text-2xl font-normal">@the_fifth_veda</span> इन्स्टाग्राम् पृष्ठम् अवलोकयन्तु आकर्षकं च सामग्रीं च मनोहराणि रील्स् द्रष्टुं!</p>
            </li>
        </ul>

        <ul className="w-[75%] text-[#62b6cb] font-extralight text-lg list-disc">
            <li>
                <p>We are currently working hard to bring you a comprehensive and immersive experience of the Mahabharata.</p>
            </li>
            <li>
                <p>We appreciate your patience and understanding as we strive to enhance your journey through this epic tale.</p>
            </li>
            <li>
                <p>Please, Check out our <span className="italic text-2xl font-normal">@the_fifth_veda</span> page on Instagram for engaging content and captivating reels!</p>
            </li>
        </ul>
    </div>
  )
}

export default Mahaabhaaratham
