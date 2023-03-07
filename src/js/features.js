export class Features {
  pointechsFeaturesArr = [
    {
      id: 0,
      headline: "Digital Loyalty Cards",
      details: [
        "Let customers easily create a digital loyalty card with a single click and be automatically registered in your database.",
        "Also, you can migrate from your plastic card system or any old system to Pointechs and migrate your customers points to Pointechs easily.",
      ],
    },
    {
      id: 1,
      headline: "Points, Stamps & Discount Coupons Programs",
      details: [
        "Pointechs Offer many loyalty programs to be customized according to your business.",
        "You can use the Points program to reward your customers based on their spendings.",
        "You can attract your customers using Digital Stamps system to let them make more visits.",
      ],
    },
    {
      id: 2,
      headline: "Referral and gaining new customers & Grow your reputation",
      details: [
        "Encourage customers to refer friends and family with referral rewards, increasing your customer base and revenue.",
        "Referral program and Giving points to be redeemed for customers has proven its efficiency to gain new customers and increase the revenue.",
      ],
    },
    {
      id: 3,
      headline: "Promotional Offers",
      details: [
        "With Pointechs you can publish your offers (e.g.  seasonal offers, new product launches, menu, promotions, etc.) to all Pointechs app users (Not only your customers) for maximum visibility and they will get notified for it.",
      ],
    },
    {
      id: 4,
      headline: "Tiers program",
      details: [
        "Pointechs Allow you to categorize your customers based on their spendings to know them well and to customize your loyalty program accordingly, all designed to increase your customers’ retention and satisfaction.",
      ],
    },
    {
      id: 5,
      headline: "Customer analytics",
      details: [
        "Customer Analytics lets you monitor the performance of your reward program. you can measure loyalty metrics and You can track your customers activities.",
        "You can generate many reports about each transaction, Analytics also help you identify critical information about your business.",
      ],
    },
    {
      id: 6,
      headline: "Business information",
      details: [
        "Publish your business information, including contact numbers and your branches’ locations, to all app users.",
      ],
    },
    {
      id: 7,
      headline: "Customer Feedback",
      details: [
        "Receive complaints and suggestions from your customers and send notifications to keep them engaged.",
        "Customers get notified automatically with any transaction.",
      ],
    },
  ];
  featuresComponent = document.querySelector(".pointechs-feature-component");
  createFeatures() {
    for (let i = 0; i < this.pointechsFeaturesArr.length; i++) {
      this.featuresComponent.innerHTML += `<div class=pointechs_feature data-aos="fade-up"
      data-aos-duration="1000">
        <div class='feature-overlay'>
        <span>${this.pointechsFeaturesArr[i].headline}</span>
        <ul>
      
        ${this.pointechsFeaturesArr[i].details.map((f) => `<li>${f}</li>`).join(" ")}
    
        </ul>
        </div>
        <span>${this.pointechsFeaturesArr[i].headline}</span>
        <p>${this.pointechsFeaturesArr[i].details[0].substring(0, 80)}......</p>
        </div>`;
    }
  }
}

let features = new Features();
features.createFeatures();
