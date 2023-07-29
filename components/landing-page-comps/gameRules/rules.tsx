import "@/components/landing-page-comps/gameRules/rulesSectionStyles.scss"
import Image from "next/image";
import rulesBTS from "@/public/title-stoked-bg/rulesTitleBgStoked.svg"
function Rules() {
  
  const rules =  [
    "Treat everyone with respect in discussion groups. We do not tolerate any kind of harassment.",
    "You are not allowed to brute-force any challenge on a server, unless specified otherwise.",
    "Do not share your login credentials with anyone other than your teammates.",
    "Violation of any of the rules may lead to disqualification.",
    "Regarding all disputes, the decision by admins is final.",
    "Collaboration between competing teams is not allowed.",
    "Posting flags in any channel is strictly prohibited.",
    "The flag format is: CTF{th1s_i5_4_s4mpl3_fl4g}",
    "Do not post write-ups until the CTF is over.",
    "Do not hack the CTF infrastructure.",
    "Team size is up to 4 players.",
  ];

  return <div className="rulesSection" id="RulesSection">
    <div className="header">
        <Image
          className="bg-title-stoked"
          src={rulesBTS}
          alt="competion title svg"
        />
    <h1 className="ruleSectionTitle sectionTitle">TERMS & RULES</h1>
      </div>

    <ul>
        {
            rules.map(
                (rule,index) => <li className="rule" key={index}>{rule}</li>
            )
        }
    </ul>
  </div>;
}
export default Rules;
