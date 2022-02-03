import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { withTranslation } from "~/i18n";
import { useText, useTextAlign } from "~/theme/common";
import imgAPI from "~/public/images/imgAPI";
import useStyles from "./faq-style";

const faqData = [
  {
    q: "What is a validator?",
    a: "Proof-Of-Stake blockchains rely on validators to secure the network. The role of a validator is to run a full node server and participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by each validator. That way, validators commit new blocks in the blockchain and receive revenue in exchange.Validators also participate in the governance of decentralized networks by voting on proposals or crafting their own proposal for the betterment of the network. ",
  },
  {
    q: "Why should I delegate my tokens to a validator?",
    a: `By delegating your staking rights to a validator, you’re participating to the blockchain consensus vote by adding the weight of your tokens to the vote, helping block issuance, and getting rewarded for it by a share of the transaction fees and token inflation. 
      It is one of the best ways to make your crypto assets work for you in a safe and secure fashion. By delegating your tokens, you earn daily rewards in the same token as your initial delegation. You can then redelegate these rewards daily, benefiting from a great compounding effect. Delegating tokens can be very rewarding as the reward rates can usually be very high depending on the chain. 
      It is well documented that the cosmos ecosystem is community driven, meaning that new projects often use existing delegators to distribute their new project tokens in order to acquire a decentralized set of initial adopters. By delegating your tokens to a decentralized validator, you might qualify for such airdrops
      `,
  },
  {
    q: "What is staking?",
    a: `Staking is the act of delegating your tokens rights to a validator. When you stake your tokens with a validator, they are “bonded”, meaning locked, for a set amount of time that differs from blockchain to blockchain. While staked, you earn blockchain rewards and are eligible to airdrops. Your tokens are still yours; they remain in your wallet and in your custody, only the right to participate in the consensus of the blockchain with your staked tokens is delegated to the validator. `,
  },
  {
    q: "Are there any risks ?",
    a: "Delegating isn’t without risk, your delegated tokens can be “slashed”, if certain things happen. Slashing is basically a tax that is paid by all delegators of the offending validator and by the validator himself. Slashing happens when a validator misses a certain number of blocks due to technical problem or the server being offline. Slashing occurs also when there is a double signing event, meaning the validator is voting on the consensus using its private validator key twice, simultaneously. This is a much rarer occurrence, as it needs intent or a huge mistake from the validator part to achieve. ",
  },
  {
    q: "How SmartNodes mitigates the risk ?",
    a: "SmartNodes offers to all its delegators a 100% uptime slashing insurance meaning that any slashing event due to downtime or technical difficulties resulting in missed blocks and rewards will be 100% covered and reimbursed by us. SmartNodes will pay back directly to the affected wallets all the rewards and token losses that occurred during said slashing event.",
  },
  {
    q: "We don’t support your network yet ?",
    a: "We strive to have a presence and support every cosmos ecosystem chain. If you would like to stake with us for a specific chain we don’t support yet, please contact us at support@smartnodes.one and we will do our best to update our services to meet your needs.",
  },
  // {
  //   q: "What is proof of stake in blockchain?",
  //   a: "Proof of Stake (PoS) concept states that a person can mine or validate block transactions according to how many coins he holds. This means that the more coins are owned by a node, the more mining power he has. There are many variants of the standard PoS, such as leased, delegated, or nominated PoS.",
  // },
  // {
  //   q: "What does Smart Nodes staking investment platform do?",
  //   a: "Smart Nodes is a reliable staking platform that allows users and businesses to earn rewards on their holdings for a selected set of high quality supported blockchains. We try to lower the barrier for new users by creating easy to follow documentation and providing help among various crypto communities. ",
  // },
  // {
  //   q: "What are the minimum and maximum deposit?",
  //   a: "Smart Nodes allows anyone to earn rewards on deposits from $1 to an unlimited amount.",
  // },
  // {
  //   q: "How much does it cost to stake with Smart Nodes ?",
  //   a: "We only have a small performance fee, that is, we take a small portion of the earnings generated by the node. This commission varies between projects but rounds the 5%. Take into account that maintaining a reliable and fault-tolerant infrastructure has very high server and administration costs.",
  // },
  // {
  //   q: "How do you keep my funds safe?",
  //   a: "We do not keep any funds except for the fees generated by the node. PoS blockchains have evolved and they no longer require to transfer funds to the validator, you just delegate your voting power by submitting a transaction. ",
  // },
  // {
  //   q: "Staking Disclaimer",
  //   a: `Nodes are non-custodial, we do not hold any money on our end. Users are responsible for saving and protecting their wallets.

  //   Some blockchains do have slashing punishment for bad nodes, our expert team have a continuous monitoring over all the nodes to prevent any related issue. As a result of that, our nodes have never been slashed. It is extremely difficult to happen, but if it that ever occurs, we will not take any responsibility on any losses.

  //   Currencies are volatile and their price may vary a lot. Please, do not take our site as advice to invest. You will be responsible for the losses that may result.`,
  // },
];

function Faq(props) {
  const classes = useStyles();
  const text = useText();
  const align = useTextAlign();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = props;
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Box mb={3}>
              <h4
                className={clsx(text.title2, isMobile ? align.textCenter : "")}
              >
                What is Staking?
              </h4>
            </Box>
            <p
              className={clsx(
                text.subtitle2,
                isMobile ? align.textCenter : align.textLeft
              )}
            >
              Proof of Stake blockchains use staking as the security mechanism
              to keep nodes honest. You can help protect networks, while holding
              your crypto in your wallet, delegating them to a trusted
              validator. In return, you get rewards.
            </p>
            <Hidden smDown>
              <div className={classes.illustration}>
                <img
                  src={imgAPI.cryptoInner[7]}
                  data-2d={imgAPI.cryptoInner[6]}
                  data-3d={imgAPI.cryptoInner[7]}
                  className="img-2d3d"
                  alt="faq 3d"
                />
              </div>
            </Hidden>
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper,
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>
                        {item.q}
                      </Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>{item.a}</Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Faq.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(["common"])(Faq);
