
import img1 from '/onBoardingImgs/onBoardingImg1.png'
import img2 from '/onBoardingImgs/onBoardingImg2.png'
import img3 from '/onBoardingImgs/onBoardingImg3.png'
export const onBoardingPages = [
    {
      id:1,
      img:img1,
      title: "Welcome",
      description: "Your heath is our priority. Learn more how it works.",
      btns: [
        {
            classN: "nextBtn",
            text : "Next"
        },
        {
            classN: "skipBtn",
            text : "Skip"
        }
      ]
    },
    {
        id:2,
      img:img2,
      title: "Find doctor near you",
      description: "Find trusted general practitioners and specialists near you.",
      btns: [
        {
            classN: "nextBtn",
            text : "Next"
        },
        {
            classN: "skipBtn",
            text : "Skip"
        }
      ]
    },
    {
        id:3,
      img:img3,
      title: "Start a chat",
      description: "Online chat consultation, make an appointment with the doctor of your choice.",
    }

  ]
