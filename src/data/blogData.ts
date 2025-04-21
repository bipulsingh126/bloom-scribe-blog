import { additionalBlogPosts } from './additionalBlogPosts';

const blogData = {
  featuredPosts: [
    {
      id: '1',
      slug: 'cultivating-mindfulness',
      title: 'Cultivating Mindfulness in Daily Life',
      excerpt: 'Discover simple ways to incorporate mindfulness practices into your everyday routine for a more balanced and peaceful life.',
      coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
      date: 'April 12, 2025',
      author: 'Emma Lawrence',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      readTime: '5 min read',
      category: 'Mindfulness',
      content: `
        <h2>Finding Peace in the Present Moment</h2>
        <p>Mindfulness, the practice of being fully present and engaged in the moment, is a powerful tool for reducing stress and enhancing well-being. In today's fast-paced world, cultivating mindfulness can help us navigate life's challenges with grace and awareness.</p>
        
        <p>The concept is simple: pay attention to the present moment without judgment. However, in practice, this can be challenging amidst the distractions of modern life.</p>
        
        <h3>Simple Daily Practices</h3>
        <p>Here are several ways to incorporate mindfulness into your daily routine:</p>
        
        <ul>
          <li><strong>Mindful Morning Routine</strong>: Begin your day by taking a few moments to breathe deeply and set an intention.</li>
          <li><strong>Mindful Eating</strong>: Pay attention to the flavors, textures, and aromas of your food.</li>
          <li><strong>Walking Meditation</strong>: Focus on the sensation of walking, feeling each step as it connects with the ground.</li>
          <li><strong>Digital Detox</strong>: Designate periods of time to disconnect from electronic devices.</li>
          <li><strong>Gratitude Practice</strong>: End each day by reflecting on three things you're grateful for.</li>
        </ul>
        
        <h3>The Science Behind Mindfulness</h3>
        <p>Research has shown that regular mindfulness practice can reduce stress, improve focus, and even enhance immune function. When we practice mindfulness, we activate the parasympathetic nervous system, which helps to counteract the effects of stress.</p>
        
        <p>MRI scans have revealed that after eight weeks of mindfulness practice, the brain's amygdala (associated with fear and emotion) appears to shrink, while the pre-frontal cortex (associated with awareness, concentration, and decision-making) becomes thicker.</p>
        
        <h3>Overcoming Common Challenges</h3>
        <p>Many people find it difficult to maintain a consistent mindfulness practice. Here are some strategies to help:</p>
        
        <ul>
          <li><strong>Start Small</strong>: Begin with just 5 minutes of mindfulness practice per day.</li>
          <li><strong>Create Cues</strong>: Associate mindfulness with existing habits, such as drinking your morning coffee.</li>
          <li><strong>Join a Group</strong>: Practicing with others can provide motivation and support.</li>
          <li><strong>Use Technology Wisely</strong>: There are many apps designed to remind and guide you in mindfulness practice.</li>
        </ul>
        
        <h3>Mindfulness in Relationships</h3>
        <p>Bringing mindfulness to our interactions with others can transform our relationships. When we are fully present with someone, we communicate respect and care. This presence allows for deeper understanding and connection.</p>
        
        <p>Practice mindful listening by giving your full attention to the speaker, without planning what you'll say next. Notice when your mind wanders, and gently bring it back to the conversation.</p>
        
        <h3>Conclusion</h3>
        <p>Cultivating mindfulness is a journey, not a destination. There will be days when it feels easy and natural, and days when it seems impossible. The key is to approach the practice with an attitude of curiosity and compassion, without judgment.</p>
        
        <p>As Jon Kabat-Zinn, founder of Mindfulness-Based Stress Reduction, reminds us: "You can't stop the waves, but you can learn to surf."</p>
      `
    },
    {
      id: '2',
      slug: 'sustainable-living',
      title: '10 Steps to More Sustainable Living',
      excerpt: 'Practical tips and ideas for reducing your environmental impact and living more sustainably without sacrificing modern comforts.',
      coverImage: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2070&auto=format&fit=crop',
      date: 'April 5, 2025',
      author: 'Oliver Green',
      authorImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      readTime: '7 min read',
      category: 'Sustainability',
      content: `
        <h2>Making Sustainable Choices</h2>
        <p>Living sustainably doesn't mean you have to radically change your lifestyle overnight. Small, consistent changes can make a significant difference in reducing your environmental footprint. This guide offers practical steps that anyone can take towards more sustainable living.</p>
        
        <h3>1. Reduce Single-Use Plastics</h3>
        <p>Single-use plastics are one of the biggest environmental challenges we face today. Start by carrying a reusable water bottle, coffee cup, shopping bags, and food containers. Refuse plastic straws and utensils when dining out, and look for products with minimal or plastic-free packaging.</p>
        
        <h3>2. Minimize Food Waste</h3>
        <p>About one-third of all food produced globally is wasted. Plan your meals, store food properly, use leftovers creatively, and compost food scraps. Consider growing some of your own herbs and vegetables if space allows.</p>
        
        <h3>3. Choose Sustainable Transportation</h3>
        <p>Transportation is a major source of carbon emissions. When possible, walk, bike, or use public transportation. If you drive, consider carpooling or switching to an electric or hybrid vehicle. For air travel, offset your carbon emissions and try to combine trips.</p>
        
        <h3>4. Conserve Energy at Home</h3>
        <p>Simple changes like switching to LED bulbs, unplugging electronics when not in use, and adjusting your thermostat can significantly reduce energy consumption. Consider a home energy audit to identify areas for improvement and explore renewable energy options like solar panels if feasible.</p>
        
        <h3>5. Save Water</h3>
        <p>Install water-efficient fixtures, fix leaks promptly, take shorter showers, and water plants during cooler parts of the day to minimize evaporation. Collect rainwater for garden use and consider drought-resistant landscaping.</p>
        
        <h3>6. Adopt a More Plant-Based Diet</h3>
        <p>Animal agriculture has a substantial environmental impact. You don't need to become vegetarian or vegan, but reducing meat consumption and choosing sustainably sourced animal products can make a difference. Try incorporating more plant-based meals into your routine.</p>
        
        <h3>7. Shop Mindfully</h3>
        <p>Before making a purchase, ask yourself if you really need it. Choose quality items that will last, and support companies with sustainable and ethical practices. Consider second-hand options, repair items when possible, and share or borrow items that are used infrequently.</p>
        
        <h3>8. Use Eco-Friendly Cleaning Products</h3>
        <p>Many conventional cleaning products contain chemicals harmful to both the environment and human health. Switch to eco-friendly alternatives or make your own using simple ingredients like vinegar, baking soda, and essential oils.</p>
        
        <h3>9. Reduce, Reuse, Recycle – In That Order</h3>
        <p>Recycling is important, but reducing consumption and reusing items are even more effective sustainability strategies. Know your local recycling guidelines to ensure you're recycling correctly and look for creative ways to repurpose items.</p>
        
        <h3>10. Connect with Nature</h3>
        <p>Spending time in nature fosters an appreciation for the environment and can motivate sustainable choices. Get involved in local conservation efforts, support environmental organizations, and stay informed about environmental issues and policies.</p>
        
        <h3>Conclusion</h3>
        <p>Sustainable living is a journey of continuous improvement rather than perfection. Each step you take, no matter how small, contributes to a healthier planet. Remember that collective action is powerful – share your sustainable practices with others and advocate for larger systemic changes in your community.</p>
      `
    },
    additionalBlogPosts[6], // Spice Journey Through India
    additionalBlogPosts[8], // Urban Terrace Gardens
  ],
  demoPosts: [
    {
      id: 'demo1',
      slug: 'introduction-to-mindfulness',
      title: 'Introduction to Mindfulness',
      excerpt: 'A beginner\'s guide to understanding and practicing mindfulness in daily life.',
      coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
      date: 'April 10, 2025',
      author: 'Emma Lawrence',
      readTime: '3 min read',
      category: 'Mindfulness',
      content: 'This is a demo post. Sign in to read the full content.'
    },
    {
      id: 'demo2',
      slug: 'sustainable-living-tips',
      title: 'Sustainable Living Tips',
      excerpt: 'Simple ways to reduce your environmental impact and live more sustainably.',
      coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop',
      date: 'April 8, 2025',
      author: 'John Smith',
      readTime: '4 min read',
      category: 'Sustainability',
      content: 'This is a demo post. Sign in to read the full content.'
    }
  ],
  recentPosts: [
    {
      id: '3',
      slug: 'morning-routine',
      title: 'The Perfect Morning Routine',
      excerpt: 'How to design a morning routine that sets you up for a productive and fulfilling day.',
      coverImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop',
      date: 'March 28, 2025',
      author: 'Sophie Chen',
      authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      readTime: '6 min read',
      category: 'Productivity',
      content: `
        <h2>Creating Your Ideal Morning</h2>
        <p>The way you start your morning can set the tone for your entire day. A thoughtfully designed morning routine can boost your productivity, enhance your wellbeing, and help you maintain focus on your priorities. This article explores how to create a morning routine that works specifically for you.</p>
        
        <h3>Why Morning Routines Matter</h3>
        <p>Our brains are most alert and creative in the first few hours after waking. This makes mornings an ideal time for important tasks that require focus and creativity. Additionally, successfully completing morning rituals gives us a sense of accomplishment that can propel us through the day.</p>
        
        <h3>Designing Your Personal Routine</h3>
        <p>The perfect morning routine is highly individual. Consider these factors when designing yours:</p>
        
        <ul>
          <li><strong>Chronotype</strong>: Are you naturally a morning person or a night owl? Your routine should respect your biology.</li>
          <li><strong>Goals</strong>: What are your current priorities? Your routine should align with these.</li>
          <li><strong>Constraints</strong>: Be realistic about your schedule and responsibilities.</li>
        </ul>
        
        <h3>Essential Elements to Consider</h3>
        
        <h4>1. Mindfulness Practice</h4>
        <p>Starting with a brief meditation, journaling, or simply sitting quietly with a cup of tea can center your mind and reduce stress. Even five minutes can make a difference.</p>
        
        <h4>2. Physical Movement</h4>
        <p>Morning exercise increases energy levels and mental clarity. This might be a full workout, yoga, stretching, or just a short walk outdoors.</p>
        
        <h4>3. Nourishment</h4>
        <p>Fuel your body with foods that provide sustained energy. Consider including protein, healthy fats, and complex carbohydrates.</p>
        
        <h4>4. Important Work</h4>
        <p>Tackle your most significant task when your mind is fresh. This could be creative work, learning, or strategic thinking.</p>
        
        <h4>5. Connection</h4>
        <p>Quality time with family, pets, or even connecting with yourself can add meaning to your morning.</p>
        
        <h3>Sample Morning Routines</h3>
        
        <h4>For Early Birds (5:30-8:00 AM)</h4>
        <ul>
          <li>5:30 - Wake up and hydrate</li>
          <li>5:45 - Meditation or journaling</li>
          <li>6:00 - Exercise</li>
          <li>6:45 - Shower and dress</li>
          <li>7:15 - Breakfast with family</li>
          <li>7:45 - Review day's priorities</li>
        </ul>
        
        <h4>For Night Owls (8:00-10:30 AM)</h4>
        <ul>
          <li>8:00 - Wake up slowly and hydrate</li>
          <li>8:15 - Light stretching</li>
          <li>8:30 - Shower and dress</li>
          <li>9:00 - Nutritious breakfast while reviewing priorities</li>
          <li>9:30 - Most important work task</li>
          <li>10:30 - Brief walk outside</li>
        </ul>
        
        <h3>Tips for Success</h3>
        <ul>
          <li><strong>Start Small</strong>: Begin with one or two changes rather than overhauling your entire morning.</li>
          <li><strong>Prepare the Night Before</strong>: Set out clothes, prepare breakfast items, and create your to-do list.</li>
          <li><strong>Build in Buffer Time</strong>: Allow extra minutes between activities to avoid feeling rushed.</li>
          <li><strong>Be Consistent</strong>: Try to wake up at the same time daily, even on weekends.</li>
          <li><strong>Adjust as Needed</strong>: Your routine should evolve with your life circumstances and goals.</li>
        </ul>
        
        <h3>Overcoming Common Challenges</h3>
        <p>Struggle with hitting snooze? Place your alarm across the room. Finding it hard to stay consistent? Pair new habits with existing ones or find an accountability partner. Remember that perfection isn't the goal—progress is.</p>
        
        <h3>Conclusion</h3>
        <p>A morning routine is a powerful tool for wellbeing and productivity, but it should serve you—not stress you. Experiment to find what genuinely enhances your life, and don't be afraid to adjust as needed. The perfect morning routine is one that you can maintain consistently and that helps you show up as your best self.</p>
      `
    },
    {
      id: '4',
      slug: 'digital-detox',
      title: 'Why You Need a Digital Detox',
      excerpt: 'The benefits of taking regular breaks from technology and how to successfully disconnect in a connected world.',
      coverImage: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2071&auto=format&fit=crop',
      date: 'March 20, 2025',
      author: 'Marcus Bell',
      authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      readTime: '8 min read',
      category: 'Wellbeing',
      content: `
        <h2>Finding Balance in a Digital World</h2>
        <p>In our hyperconnected world, the average person spends over 7 hours daily on digital devices. While technology offers tremendous benefits, constant connectivity can take a toll on our mental health, productivity, and relationships. A digital detox—intentionally unplugging from digital devices for a period—can help restore balance.</p>
        
        <h3>Signs You Might Need a Digital Detox</h3>
        <p>Consider taking a break from technology if you experience:</p>
        <ul>
          <li>Anxiety when separated from your phone</li>
          <li>Difficulty concentrating or sleeping</li>
          <li>Neck pain or eye strain</li>
          <li>Reduced productivity despite feeling busy</li>
          <li>Comparing yourself to others on social media</li>
          <li>Missing out on real-life conversations or experiences</li>
        </ul>
        
        <h3>The Science-Backed Benefits</h3>
        
        <h4>Improved Mental Health</h4>
        <p>Research has linked excessive social media use to increased rates of anxiety and depression. Studies show that even a week-long break from social media can lead to significant improvements in wellbeing and reduced feelings of loneliness.</p>
        
        <h4>Better Sleep Quality</h4>
        <p>The blue light emitted by screens disrupts melatonin production, making it harder to fall asleep. Disconnecting from devices at least an hour before bedtime can significantly improve sleep quality and duration.</p>
        
        <h4>Enhanced Relationships</h4>
        <p>A study published in the Journal of Social and Personal Relationships found that the mere presence of a phone during a conversation reduced participants' feelings of closeness, connection, and conversation quality.</p>
        
        <h4>Increased Productivity and Creativity</h4>
        <p>Constant notifications fragment our attention. Research shows that it takes an average of 23 minutes to refocus after an interruption. Digital breaks allow for deeper work and create space for creative thinking.</p>
        
        <h3>How to Do a Digital Detox</h3>
        
        <h4>Start Small</h4>
        <p>Begin with manageable periods of disconnection:</p>
        <ul>
          <li>Device-free meals</li>
          <li>No-phone zones in your home</li>
          <li>Tech-free mornings or evenings</li>
          <li>Screen-free Sundays</li>
        </ul>
        
        <h4>Weekend Detox</h4>
        <p>For a deeper reset, try a weekend detox:</p>
        <ol>
          <li>Plan ahead and inform key contacts</li>
          <li>Delete tempting apps temporarily</li>
          <li>Turn off notifications or use airplane mode</li>
          <li>Prepare offline activities you enjoy</li>
          <li>Consider using a basic phone for emergencies</li>
        </ol>
        
        <h4>Extended Digital Sabbatical</h4>
        <p>For those seeking a profound reset, consider a longer break during a vacation or retreat. Many retreats now offer digital detox programs in natural settings.</p>
        
        <h3>Preparing for Success</h3>
        <p>Set yourself up for a successful digital detox by:</p>
        <ul>
          <li>Setting clear boundaries and communicating them to others</li>
          <li>Having alternative activities ready (books, crafts, outdoor plans)</li>
          <li>Finding an accountability partner</li>
          <li>Tracking your progress and celebrating small wins</li>
        </ul>
        
        <h3>Returning to Technology Mindfully</h3>
        <p>After your detox, use what you've learned to create healthier technology habits:</p>
        <ul>
          <li>Be selective about which apps you reinstall</li>
          <li>Set specific times for checking email and social media</li>
          <li>Use tools like app timers and screen time reports</li>
          <li>Regularly evaluate whether your tech use aligns with your values</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>A digital detox isn't about rejecting technology entirely, but rather about regaining control of how and when you engage with it. By intentionally disconnecting periodically, you can enjoy the benefits of our digital world while maintaining the space for presence, deep thought, and genuine connection that makes life meaningful.</p>
      `
    },
    additionalBlogPosts[0], // Ancient Ayurvedic Remedies
    additionalBlogPosts[1], // Yoga for Beginners
    additionalBlogPosts[4], // Monsoon Meditation Techniques
  ],
  allPosts: [
    // Original posts
    {
      id: '1',
      slug: 'cultivating-mindfulness',
      title: 'Cultivating Mindfulness in Daily Life',
      excerpt: 'Discover simple ways to incorporate mindfulness practices into your everyday routine for a more balanced and peaceful life.',
      coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop',
      date: 'April 12, 2025',
      author: 'Emma Lawrence',
      authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      readTime: '5 min read',
      category: 'Mindfulness'
    },
    {
      id: '2',
      slug: 'sustainable-living',
      title: '10 Steps to More Sustainable Living',
      excerpt: 'Practical tips and ideas for reducing your environmental impact and living more sustainably without sacrificing modern comforts.',
      coverImage: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&w=2070&auto=format&fit=crop',
      date: 'April 5, 2025',
      author: 'Oliver Green',
      authorImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      readTime: '7 min read',
      category: 'Sustainability'
    },
    {
      id: '3',
      slug: 'morning-routine',
      title: 'The Perfect Morning Routine',
      excerpt: 'How to design a morning routine that sets you up for a productive and fulfilling day.',
      coverImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070&auto=format&fit=crop',
      date: 'March 28, 2025',
      author: 'Sophie Chen',
      authorImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
      readTime: '6 min read',
      category: 'Productivity'
    },
    {
      id: '4',
      slug: 'digital-detox',
      title: 'Why You Need a Digital Detox',
      excerpt: 'The benefits of taking regular breaks from technology and how to successfully disconnect in a connected world.',
      coverImage: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2071&auto=format&fit=crop',
      date: 'March 20, 2025',
      author: 'Marcus Bell',
      authorImage: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      readTime: '8 min read',
      category: 'Wellbeing'
    },
    // Add all the additional blog posts
    ...additionalBlogPosts
  ],
  categories: ['All', 'Mindfulness', 'Sustainability', 'Productivity', 'Wellbeing', 'Home', 'Food', 'Travel', 'Creativity'],
  aboutContent: {
    title: 'About BloomScribe',
    subtitle: 'A personal journey through mindful living and sustainable choices',
    image: 'https://images.unsplash.com/photo-1509220157937-e90226704927?q=80&w=1973&auto=format&fit=crop',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    authorName: 'Emma Lawrence',
    authorBio: 'Hi, I\'m Emma! I\'m a writer, mindfulness practitioner, and sustainability advocate based in Portland, Oregon. I started BloomScribe in 2023 as a way to share my journey toward living more intentionally and connect with others on similar paths.',
    mission: 'At BloomScribe, we believe that small, mindful choices can lead to profound positive changes in our lives and in the world around us. Through thoughtful content and practical advice, we aim to inspire and support readers in creating more intentional, sustainable, and joyful lives.',
    values: [
      {
        title: 'Mindful Living',
        description: 'Cultivating awareness and presence in everyday moments.'
      },
      {
        title: 'Sustainability',
        description: 'Making choices that respect and protect our natural environment.'
      },
      {
        title: 'Authenticity',
        description: 'Sharing genuine experiences, including challenges and setbacks.'
      },
      {
        title: 'Community',
        description: 'Creating connections and fostering supportive relationships.'
      }
    ],
    contact: {
      email: 'hello@bloomscribe.com',
      instagram: '@bloomscribe',
      twitter: '@bloomscribe'
    }
  },
  contactInfo: {
    // ... existing contact info
  }
};

// Add featured posts to all posts
blogData.allPosts = [...blogData.featuredPosts, ...blogData.allPosts];

export default blogData;
