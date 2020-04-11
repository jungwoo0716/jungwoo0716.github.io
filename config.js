module.exports = {
  /** Site MetaData (Required all)*/
  title: `Spacebar`,                           // (* Required)
  description: `My Blog`,          // (* Required)
  author: `jungwoo kim`,                         // (* Required)
  siteUrl: 'https://jungwoo0716.github.io',                      // (* Required)
    // ex.'https://junhobaik.github.io'
    // ex.'https://junhobaik.github.io/' << X, Do not enter "/" at the end.

  /** Header */
  profileImageFileName: '', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Interested in System',
  name: 'Jungwoo Kim',
  company: '',
  location: 'Korea',
  email: 'kimjungwoo0716@gmail.com',
  website: 'https://github.com/jungwoo0716/jungwoo0716.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                                          // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                                          // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: '',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '',            // comments (Disqus sort-name)
  enableSocialShare: true,        // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: 'UA-163394972-1',     // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: 'gIiZlPtvReoFUr7eNqK3sIygXiwZCEPW83Wz1wtk604', // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: '7126516057',   // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: 'pub-1067668052326016', // Google Adsense Client. ex.'ca-pub-5001380215831339'
    // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
