# Titans of War: Rome Reconquest

## Production and Historical Design Plan

**Working subtitle:** The Age of Justinian
**Status:** Planning draft for review
**Player role:** Emperor Justinian I
**Core campaign:** 527-565
**Recommended target:** A 75-120 minute deterministic campaign with substantial replay value
**AI policy:** Fully playable without AI; local AI is an optional advisory and counterargument layer

---

## 1. Executive Summary

Titans of War: Rome Reconquest will be a historical statecraft and strategy game about governing the Roman Empire during the reign of Justinian. The player will not simply move armies west. The player must decide whether the state can afford reconquest, appoint and control unusually capable subordinates, survive revolt and disease, manage religious and provincial disputes, preserve eastern defenses, and convert battlefield success into durable government.

The governing thesis is:

> Imperial strength is not the same as imperial concentration. A center that consumes every local capacity eventually governs a map rather than a functioning state. A center too weak to command revenue, law, and armies invites private power, mutiny, and fragmentation.

The game will therefore model **Imperial Reach** and **Provincial Resilience** as separate variables. They can reinforce one another, or one can destroy the other. The optimal position will move with circumstances. War may require temporary concentration. Settlement, tax collection, food distribution, and disease recovery may require trusted local authority.

The campaign will be built around five acts:

1. Consolidation, law, Persia, and the Nika revolt.
2. The Vandal and first Gothic campaigns.
3. Persia, plague, overextension, and imperial crisis.
4. Narses, renewed reconquest, and western settlement.
5. The final imperial balance and succession.

The first implementation will be a vertical slice covering 527-532. It must prove the appointment system, court politics, treasury, Hippodrome factions, military command, centralization tradeoffs, historical context, and a major branching crisis before the western campaign is built.

---

## 2. Product Promise

The public-facing promise should be understandable in two sentences:

> You are Justinian, emperor of the Romans. Choose the people who will govern and fight for you, survive the factions of Constantinople, and decide whether Rome can be restored without destroying the state that must pay for it.

The player should learn five things through play:

1. Conquest and governance are different problems.
2. Exceptional commanders create both opportunity and political danger.
3. The imperial center depends on provincial institutions, revenue, food, and information.
4. Court, army, religious, urban, and provincial interests overlap but are not interchangeable.
5. Justinian's achievements and disasters cannot be reduced to either heroic restoration or reckless failure.

---

## 3. Historical Frame and Terminology

### 3.1 Roman identity

The player and most state actors will call the polity the **Roman Empire**, the state the **Roman commonwealth**, and its inhabitants **Romans** where appropriate. "Byzantine" may appear in modern explanatory material, metadata, or accessibility text, but it should not dominate in-character writing.

### 3.2 The Hippodrome, not the Circus Maximus

The main political arena in Constantinople is the **Hippodrome of Constantinople**. The Circus Maximus is in Rome. The Circus Maximus can appear after Roman forces enter Italy, but it should not be used as the name of Constantinople's arena.

The Blues and Greens will not be portrayed as modern political parties. They were racing factions and urban patronage networks that could channel public demands, violence, ceremonial loyalty, and elite intervention. Their exact social and political role is debated, so the game will distinguish direct evidence from interpretation.

### 3.3 The Senate

The sixth-century Senate of Constantinople was an aristocratic body, status order, court constituency, and potential source of imperial rivals. It was not the legislature of the Roman Republic. Senate influence will operate through:

- Officeholding and administrative competence.
- Wealth, property, and tax exposure.
- Dynastic legitimacy and alternative imperial candidates.
- Patronage of urban and provincial clients.
- Cooperation, obstruction, rumor, and conspiracy.

### 3.4 Theodora

Theodora will not be represented by a "wife happiness" meter. She is a political actor with her own intelligence network, clients, religious commitments, allies, enemies, judgment, and tolerance for imperial methods.

The relationship model will track:

- Personal trust.
- Policy alignment.
- Respect for her independent network.
- Court access and influence.
- Whether the player follows, consults, ignores, or publicly undermines her counsel.

Her support may stabilize the palace while creating opposition elsewhere. Her death in 548 must change the political structure of the game rather than simply remove a character portrait.

### 3.5 Religious language

The game will use period-specific labels carefully. It will distinguish Chalcedonian, Miaphysite, papal, and other positions without flattening them into modern political categories. "Monophysite" will appear only where a source, speaker, or historiographical note makes it appropriate. Historical context will explain disputes in terms of doctrine, authority, communion, episcopal networks, imperial unity, and regional allegiance.

### 3.6 Disease and uncertainty

The plague will not grant the player modern medical knowledge. In-character choices will be limited to measures available to a sixth-century government: burial administration, food supply, tax relief, continuity of offices, public order, movement of troops, provincial delegation, and care institutions. Modern pathogen identification may appear only in optional historical context, clearly separated from what actors knew.

---

## 4. Design Pillars

### Pillar A: People are strategy

Appointments will matter as much as policies. A brilliant general, jurist, prefect, chamberlain, or negotiator changes what options are available and how reliably orders are carried out.

### Pillar B: Every strength has a political cost

There will be no permanently correct faction, office, commander, tax policy, or centralization setting. Strong generals may become autonomous. Efficient revenue officials may destroy consent. Provincial freedom may preserve local capacity while reducing obedience.

### Pillar C: Victories must be settled

Capturing Carthage, Rome, or Ravenna will not complete a campaign. The player must decide how to govern, tax, garrison, reconcile elites, restore law, pay troops, and handle religious institutions.

### Pillar D: The empire has several fronts at once

Resources spent in Africa and Italy are unavailable in Persia, the Balkans, the capital, and disease recovery. The game should make opportunity cost visible before the player chooses.

### Pillar E: Historical context follows curiosity

The main decision screen will remain concise. Players can open context panels for primary evidence, historiographical disagreement, offices, people, geography, and actual outcomes.

### Pillar F: Alternate history must remain constrained

Counterfactual branches will follow available resources, institutions, personalities, communication delays, and contemporary political assumptions. The engine will not reward fantasy solutions that require knowledge or capacity the government did not possess.

---

## 5. Core Game Loop

Each major turn represents a strategic decision point rather than a fixed month.

1. **Receive the imperial brief.** The player sees the immediate crisis, date, location, known facts, and uncertain reports.
2. **Review the state.** Treasury, food, forces, provincial conditions, court coalition, and active appointments are visible.
3. **Hear counsel.** Two to four historical actors present conflicting recommendations based on their offices and interests.
4. **Choose a policy or appointment.** Most turns offer three defensible choices with different costs and risks.
5. **Allocate support.** Important choices may require money, troops, grain, prestige, or delegation to a named official.
6. **Resolve consequences.** The deterministic engine applies immediate effects and schedules delayed effects.
7. **Record the imperial ledger.** The game explains what changed without revealing future optimal choices.
8. **Advance the campaign graph.** The next event depends on date, appointments, resources, fronts, and prior commitments.

The player should make a meaningful choice within 60 seconds of starting the game. The first appointment crisis should occur before any lengthy introduction.

---

## 6. State Model

The engine should avoid one all-purpose score. It will track resources, institutional capacities, faction relationships, people, provinces, and fronts separately.

### 6.1 Material resources

| Resource | Meaning | Common sources | Common drains |
|---|---|---|---|
| Treasury | Liquid imperial funds and credit | Taxation, customs, confiscations, recovered revenue | Army pay, diplomacy, construction, relief, fleets |
| Grain and provisions | Capital food security and campaign supply | Egypt, Africa, provincial requisition, markets | Capital distribution, armies, siege, disruption |
| Field manpower | Trained and recruitable military strength | Existing armies, recruitment, allied contingents | Battle, garrisons, disease, desertion |
| Administrative capacity | Ability to issue, transmit, and enforce policy | Competent officials, stable provinces, law, records | Purges, plague, corruption, rapid expansion |
| Imperial attention | Number of major initiatives the court can supervise | Delegation, trusted officials, peace on a front | Simultaneous wars, legal reform, revolt, rebuilding |

### 6.2 Institutional capacities

| Measure | High value provides | Excess or neglect creates |
|---|---|---|
| Imperial Reach | Fast orders, revenue extraction, unified command | Overcontrol, bottlenecks, court dependence |
| Provincial Resilience | Local recovery, information, recruitment, routine government | Autonomy, uneven compliance, entrenched patrons |
| Fiscal Durability | Reliable pay, credit, and long campaigns | Tax pressure if pursued without consent or recovery |
| Military Cohesion | Obedience across commanders and contingents | Rival commands, mutiny, unpaid troops |
| Legal Confidence | Predictable administration and settlement | Rigidity or politicized enforcement |
| Public Order | Functioning capital and provincial cities | Repression can conceal rather than solve hostility |

### 6.3 Political relationships

| Constituency | What it wants | What it can do |
|---|---|---|
| Theodora and her network | Trust, influence, selected religious and court protections | Stabilize the palace, gather intelligence, counter rivals |
| Senate and great households | Office, property security, status, influence | Supply administrators, obstruct, finance rivals, support claimants |
| Blues | Patronage, protection, faction honor, urban influence | Acclaim, mobilize crowds, fight rivals, transmit grievances |
| Greens | Access, justice, faction honor, relief from hostile patronage | Protest, mobilize crowds, align with elite opposition |
| Army commanders | Pay, reinforcements, clear authority, honor | Win wars, delay orders, build personal followings, mutiny |
| Capital population | Food, order, justice, spectacle, accessible authority | Acclaim, riot, cooperate, spread rumor |
| Provincial elites | Predictable taxes, local standing, security | Collect revenue, withhold cooperation, negotiate with invaders |
| Bishops and religious networks | Doctrinal protection, jurisdiction, access | Legitimate rule, organize relief, resist policy, mobilize regions |

### 6.4 Front status

Each theater tracks:

- Commander.
- Army strength and composition.
- Supply.
- Local intelligence.
- Fortification and mobility.
- Enemy posture.
- Provincial cooperation.
- Campaign objective.
- Time since last pay.
- Political autonomy of the commander.

Initial theaters:

1. Eastern frontier and Sasanian diplomacy.
2. Constantinople and Thrace.
3. Balkans and Danube approaches.
4. Africa after 533.
5. Italy after 535.
6. Southern Spain as a limited late branch.

---

## 7. Centralization and Provincial Balance

This is the game's signature system.

### 7.1 Two axes, not one slider

**Imperial Reach** measures whether the center can command.
**Provincial Resilience** measures whether provinces can continue functioning without constant rescue from Constantinople.

These produce four broad conditions:

| Imperial Reach | Provincial Resilience | Condition | Typical result |
|---|---|---|---|
| High | High | Integrated empire | Orders travel, taxes arrive, and provinces recover locally |
| High | Low | Extractive center | Short-term strength followed by information failure and exhaustion |
| Low | High | Loose commonwealth | Local recovery with uneven obedience and stronger regional bargaining |
| Low | Low | Fragmentation | Private armies, tax collapse, urban disorder, and exposed frontiers |

### 7.2 How the player changes the balance

Centralizing actions include:

- Replacing local officeholders with palace appointees.
- Concentrating tax collection.
- Requiring direct approval for military and civil decisions.
- Confiscating estates or municipal resources.
- Bypassing governors through special commissioners.

Resilience-building actions include:

- Confirming local law and property settlements.
- Giving governors bounded emergency authority.
- Maintaining municipal, ecclesiastical, and provincial relief networks.
- Leaving a portion of revenue for repair and defense.
- Appointing officials with local knowledge and enforceable audits.

### 7.3 Delayed consequences

The cost of overcentralization should often arrive several turns later. A confiscation can fund a fleet now but reduce provincial recovery, future revenue, and elite intelligence. Delegation can look weak now but allow a province to survive plague or invasion without waiting for an imperial order.

The ledger must show both immediate and delayed commitments.

---

## 8. Appointments and Personnel

Appointments will be a first-class game system, not flavor text.

### 8.1 Office categories

| Portfolio | Period basis | Gameplay responsibility |
|---|---|---|
| Praetorian Prefecture | Praetorian prefects and regional administration | Taxation, civil government, logistics, provincial recovery |
| Quaestorship | Quaestor sacri palatii | Law commission, imperial constitutions, legal confidence |
| Palace and Foreign Affairs | Magister officiorum and diplomatic agents | Intelligence, envoys, palace administration, foreign courts |
| Sacred Largesses | Comes sacrarum largitionum and fiscal offices | Treasury, mints, customs, selected revenues |
| Capital Government | Urban prefect and city administration | Food, policing, burial, markets, Hippodrome order |
| High Command | Magistri militum and expeditionary commands | Campaigns, recruitment, army cohesion, frontier posture |
| Ecclesiastical Liaison | Emperor, patriarchal court, bishops, papal envoys | Church settlement, communion, regional religious politics |

The UI may use concise English portfolio labels, but every office receives a historical glossary entry.

### 8.2 Major people to model

The initial research roster should include:

- Theodora.
- Belisarius.
- Antonina.
- Narses.
- Tribonian.
- John the Cappadocian.
- Peter Barsymes.
- Sittas.
- Mundus.
- Germanus.
- Solomon.
- John Troglita.
- Liberius.
- Hermogenes.
- Procopius as observer and source, not an omniscient adviser.
- Khosrow I.
- Gelimer.
- Amalasuntha.
- Theodahad.
- Witigis.
- Totila.
- Teias.
- Pope Vigilius.
- Major patriarchs and doctrinal intermediaries needed by specific scenarios.

### 8.3 Personnel attributes

Each person will have visible and hidden attributes:

- Administrative, military, legal, or diplomatic competence.
- Loyalty to office, dynasty, patron, or personal following.
- Independence.
- Court faction and personal rivalries.
- Provincial knowledge.
- Religious alignment and networks.
- Cost and patronage requirements.
- Health, age, and availability.
- Reputation among army, Senate, court, and provinces.

Hidden attributes should not turn the game into guesswork. The player receives reports of varying reliability and can learn from prior service.

### 8.4 Appointment consequences

The best specialist may not be the best political appointment. Examples:

- A highly effective revenue official can replenish the treasury while damaging provincial consent.
- A victorious general can become indispensable, expensive, and politically alarming.
- Dividing command can reduce coup risk while destroying battlefield unity.
- Recalling a commander can protect the throne while forfeiting campaign momentum.
- Giving an official adequate resources can be more important than choosing the highest competence rating.

---

## 9. Theodora and the Imperial Partnership

The Imperial Partnership panel should show:

- Trust.
- Shared strategic purpose.
- Independent network strength.
- Current points of agreement and disagreement.
- Whether Theodora has been given authority to act.

Theodora can:

- Offer decisive counsel during the Nika revolt.
- Protect or promote clients.
- Supply intelligence unavailable through formal offices.
- Mediate selected religious disputes.
- Counter senatorial or palace rivals.
- Increase the cost of policies directed against her network.

The player may disagree with her without automatically losing. Public humiliation, exclusion from decisions in her domain, or attacks on protected clients should have larger consequences than ordinary policy disagreement.

After 548, unresolved tensions previously contained by the partnership should reappear. The player should feel that an institution of the reign has disappeared.

---

## 10. Disease, Demography, and Recovery

The plague system must be structural, not a single random punishment.

### 10.1 Outbreak model

In Guided History mode:

- Initial reports emerge from the eastern Mediterranean in 541.
- Constantinople faces its major outbreak in 542.
- Regional timing and severity vary within historically defensible bounds.

In Counterfactual mode:

- The broad outbreak remains historically anchored.
- Trade routes, war movement, grain disruption, and administrative readiness affect consequences, not magical prevention.

### 10.2 Effects

Disease can reduce:

- Population and labor.
- Tax collection.
- Army recruitment and readiness.
- Number of functioning officials.
- Burial capacity and public order.
- Agricultural and transport output.
- Reliability of reports.

It can increase:

- Food prices.
- Inheritance and property disputes.
- Desertion and unpaid obligations.
- Demands for tax relief.
- Dependence on surviving local institutions.
- Pressure to suspend or narrow campaigns.

### 10.3 Player choices

The player may:

- Fund burial and city administration.
- Protect grain distribution.
- Suspend or defer selected taxes.
- Continue full assessments despite population loss.
- Delegate temporary authority to governors and bishops.
- Preserve army pay or redirect funds to the capital.
- Recall troops, isolate commands, or accept weakened fronts.
- Prioritize legal continuity for estates and offices.

No choice eliminates plague. Choices determine which institutions remain when the first wave passes.

### 10.4 Source treatment

Procopius, John of Ephesus, and Evagrius will be compared rather than blended into a single certain narrative. Numerical claims, especially spectacular daily death totals, will be labeled as reported estimates rather than settled facts.

---

## 11. Military Strategy

The player is emperor, not a battlefield cursor. Tactical decisions will occur at selected major battles, but the primary military game concerns objectives, commanders, resources, timing, supply, and political control.

### 11.1 Imperial decisions

- Whether to begin a campaign.
- Which objective is limited and which is open-ended.
- Commander and command structure.
- Force size and composition.
- Fleet and supply commitment.
- Reinforcement and pay.
- Terms offered to enemy rulers, cities, and elites.
- Whether to recall, replace, or support a commander.
- Whether victory is followed by annexation, client rule, or negotiated settlement.

### 11.2 Campaign resolution inputs

Campaign outcomes will consider:

- Commander competence and independence.
- Army cohesion.
- Supply and pay.
- Intelligence.
- Enemy leadership and internal division.
- Local population and elite cooperation.
- Disease and season.
- Fleet control.
- Clarity of objective.
- Conflict between generals.
- Prior promises made to cities, soldiers, and rulers.

### 11.3 Major military episodes

The research and scenario list should include:

- Dara and the early Persian front.
- Callinicum and the consequences of an indecisive or costly battle.
- Ad Decimum.
- Tricamarum.
- The seizure and settlement of Carthage.
- Sicily and the opening of the Gothic War.
- The siege and defense of Rome.
- Competing commands and the Milan/Auximum/Ravenna problems.
- The offer of the western imperial title to Belisarius at Ravenna.
- Khosrow's western offensive and Antioch.
- Totila's recovery in Italy.
- Africa's mutinies and Moorish wars.
- Narses's appointment and funding.
- Taginae.
- Mons Lactarius.
- Frankish and Alamannic intervention.
- The limited intervention in southern Spain.
- The Kutrigur threat near Constantinople in 559.

Not every episode needs a battlefield decision. Some should be appointment, supply, settlement, or diplomatic stages.

---

## 12. Diplomacy and External Powers

Diplomacy should model promises, tribute, hostages, dynastic claims, client peoples, religious ties, and the credibility of Roman military commitments.

Priority external actors:

1. The Sasanian Empire under Kavad I and Khosrow I.
2. The Vandal kingdom.
3. The Ostrogothic kingdom and its Roman administration.
4. Frankish rulers and their opportunities in Italy.
5. Arab client kingdoms on the eastern frontier.
6. Danubian and steppe threats relevant to specific turns.
7. The Visigothic kingdom for the limited Spanish branch.

The game should avoid presenting all neighboring peoples as identical hostile units. Each has different leadership problems, religious arrangements, elite interests, and strategic objectives.

---

## 13. Religious and Ecclesiastical Politics

Religious policy will be a core governing system because it affected imperial legitimacy, diplomacy, provincial cooperation, law, episcopal networks, and relations with Rome.

The player will manage:

- Chalcedonian imperial policy.
- Miaphysite networks and Theodora's protections.
- Relations with patriarchs.
- Relations with the papacy.
- The Three Chapters controversy.
- Religious settlements in reconquered territories.
- The use and limits of imperial coercion.

The engine will track **Church Peace** by region rather than one universal religion meter. A decision that improves communion with one constituency may disrupt another.

Historical context must distinguish theological claims from their political consequences. It must not imply that doctrine was merely a disguise for regional interests, nor that political power was irrelevant to doctrinal conflict.

---

## 14. Campaign Structure

The target is approximately 32 core stages plus 10-15 conditional stages. A normal run should see 24-30 stages.

### Act I: The New Reign, 527-532

Purpose: Establish the people, offices, fiscal structure, eastern war, legal ambition, factions, and survival of the dynasty.

Core stages:

1. Co-emperor and succession arrangements.
2. First appointments: law, revenue, palace, and high command.
3. The law commission and scope of codification.
4. The Persian front and command of Belisarius.
5. Dara: defense, pursuit, or preservation of the army.
6. Callinicum: accountability, command confidence, and eastern posture.
7. Revenue reform and the methods of John the Cappadocian.
8. Hippodrome petitions and faction violence.
9. The arrests that unite Blues and Greens.
10. Nika: dismiss officials, negotiate, flee, or hold the palace.
11. Theodora's intervention and the loyalty of commanders.
12. Suppression, clemency, confiscation, and senatorial settlement.
13. Rebuilding Constantinople and financing Hagia Sophia.

Conditional branches:

- Justinian is deposed or flees.
- Hypatius becomes a rival emperor.
- The revolt is settled without the historical massacre but leaves a stronger senatorial coalition.
- Belisarius or Mundus is unavailable because of earlier choices.

### Act II: The Western Opportunity, 532-540

Purpose: Test whether a recovered treasury and experienced army can achieve limited war without abandoning Persia or provincial stability.

Core stages:

1. The Eternal Peace and its price.
2. Vandal dynastic crisis and the case for intervention.
3. Fleet, provisions, and expedition size.
4. Ad Decimum and command under uncertainty.
5. Carthage: discipline, property, and local cooperation.
6. Tricamarum and Gelimer's terms.
7. Africa: garrison, taxes, religious settlement, and Moorish diplomacy.
8. Triumph and Belisarius's standing.
9. Amalasuntha, Theodahad, and the Gothic succession crisis.
10. Limited intervention or full invasion of Italy.
11. Sicily and the Italian administrative question.
12. The defense of Rome.
13. Rival commands, delayed pay, and divided objectives.
14. Milan, Auximum, and the cost of dispersal.
15. Ravenna and the offer made to Belisarius.
16. Recall, trust, deception, or a negotiated western settlement.

Conditional branches:

- No Vandal War.
- Vandal client settlement instead of annexation.
- Africa is conquered but lost to mutiny.
- Italy remains a client kingdom.
- Belisarius accepts or appears to accept an independent western crown.
- The player prioritizes Italy while leaving the eastern frontier dangerously exposed.

### Act III: The Empire Under Judgment, 540-548

Purpose: Break the assumption that early success guarantees durable restoration.

Core stages:

1. Khosrow rejects the western balance and attacks.
2. Defense of Syria and the fate of Antioch.
3. Eastern tribute, renewed war, or strategic withdrawal.
4. Totila and the collapse of the Italian settlement.
5. Command without adequate money or reinforcements.
6. First reports of pestilence.
7. Constantinople's burial, grain, and office crisis.
8. Justinian falls ill: continuity of government and succession fears.
9. Taxes on depopulated districts.
10. Army pay versus provincial relief.
11. African mutiny and renewed war.
12. Theodora's religious and palace network under pressure.
13. The death of Theodora in 548.

Conditional branches:

- A smaller western commitment leaves a stronger eastern and fiscal position.
- Plague destroys an overcentralized administration faster than a delegated one.
- A succession crisis begins during Justinian's illness.
- Italy is abandoned, partitioned, or reinforced.

### Act IV: The Second Reconquest, 549-554

Purpose: Determine whether the player has learned from the first settlement or simply repeats it with a larger army.

Core stages:

1. Whether Italy still justifies another major commitment.
2. Belisarius, Germanus, or Narses as the basis of renewed command.
3. Narses demands money, authority, and unity of command.
4. Recruitment of allied contingents.
5. Route, supply, and the approach to Italy.
6. Taginae and the risk of decisive battle.
7. Totila's death and treatment of Gothic survivors.
8. Teias and Mons Lactarius.
9. Frankish and Alamannic armies enter the settlement.
10. Limited intervention in Spain.
11. Pope Vigilius and the Three Chapters.
12. The Pragmatic Sanction and civil government in Italy.

Conditional branches:

- Narses is denied resources and refuses or fails.
- Italy is recovered militarily but remains fiscally and administratively broken.
- Surviving Gothic elites receive a negotiated place in Roman government.
- The player creates a looser western settlement rather than direct uniform administration.

### Act V: What Was Restored?, 555-565

Purpose: Grade the reign by durability rather than map color.

Core stages:

1. Fortification, field armies, and the cost of defending the expanded frontier.
2. Provincial revenue versus reconstruction.
3. Kutrigur danger and the defense of Constantinople.
4. Final peace with Persia.
5. Religious policy after decades of failed and partial settlements.
6. Court succession and the problem of Justin II.
7. Final imperial audit in 565.

---

## 15. Scenario Anatomy

Every scenario should contain:

```text
id
date
act
title
location
player_role
known_facts
uncertain_reports
stakes
available_people
required_appointments
options[]
  id
  label
  argument
  resource_costs
  immediate_effects
  delayed_effects
  faction_effects
  appointment_effects
  route
historical_outcome
historical_context
primary_sources[]
secondary_sources[]
uncertainty_notes[]
media_id
content_warnings[]
```

Rules:

- Options must be written from information available at that time.
- At least two options should be strategically defensible.
- The historical choice is not automatically the highest-scoring choice.
- Effects must identify whether they are immediate, delayed, conditional, or hidden.
- A source supports a claim, not merely the general topic.
- Uncertain claims are marked in the data and UI.
- Option labels must not announce victory, defeat, or the designer's preferred answer.

---

## 16. Endings

Endings should reflect both imperial extent and institutional condition.

### Primary ending families

1. **Restoration with Durable Provinces**
   Much of the western program succeeds and local government remains capable.

2. **The Historical Achievement and Burden**
   A large reconquest survives the reign, but Italy, finances, and frontier commitments remain deeply strained.

3. **Eastern Consolidation**
   The player limits western war, strengthens the east, and preserves a smaller but more resilient empire.

4. **Mediterranean Commonwealth**
   Client arrangements, negotiated elites, and bounded imperial authority create a looser restoration.

5. **The General's Empire**
   A commander becomes indispensable or politically autonomous, dividing military success from dynastic control.

6. **Palace Overthrow**
   Nika, succession, or court coalition removes Justinian.

7. **Map Without a State**
   Conquests remain on the map while treasury, administration, and provincial cooperation collapse.

8. **Provincial Fragmentation**
   Weak reach and weak resilience allow armies, governors, and local powers to act independently.

9. **Fiscal and Demographic Exhaustion**
   Disease, taxation, war, and administrative loss make continued imperial commitments impossible.

10. **Unfinished Restoration**
    The reign ends with a mixed settlement and a succession that will determine whether prior gains survive.

No ending should claim that the engine has identified the single objectively best history. The report should explain tradeoffs and evidence.

---

## 17. Final Evaluation

The player receives separate grades rather than one victory score.

| Grade | Question |
|---|---|
| Imperial Statecraft | Did the player preserve a governable imperial system? |
| Military Strategy | Were objectives, commanders, supply, and fronts handled coherently? |
| Provincial Settlement | Did recovered and existing provinces retain institutions and cooperation? |
| Fiscal Stewardship | Could obligations be paid without destroying the future tax base? |
| Coalition Management | Did the player manage court, Senate, factions, army, Church, and Theodora? |
| Crisis Leadership | How did the government perform during Nika, plague, invasion, and succession? |
| Historical Divergence | How far did events depart from the recorded chronology? This is descriptive, not moral. |

The final report will include:

- Major appointments.
- Surviving and lost territories.
- Treasury and unpaid obligations.
- State of each province.
- Relationship with Theodora through 548.
- Generals trusted, recalled, disgraced, or empowered.
- Disease recovery.
- Religious settlements and unresolved disputes.
- Three decisions with the largest delayed consequences.
- Historical comparison and source notes.

---

## 18. Historical Research System

### 18.1 Source hierarchy

1. Contemporary primary sources.
2. Near-contemporary chronicles, laws, letters, inscriptions, coins, and material evidence.
3. High-quality specialist historians and reference works.
4. General summaries only as finding aids, never as final authority for disputed claims.

### 18.2 Procopius must remain three sources

Procopius's works have different purposes and voices:

- **Wars** supplies campaign narrative and political episodes.
- **Buildings** presents an imperial and celebratory account of construction and rule.
- **Secret History** is intensely hostile and contains valuable claims, invective, literary construction, and disputed allegations.

The source ledger will never cite "Procopius" without naming the work, book, and passage. Contradictions between his works are evidence to analyze, not errors to silently merge.

### 18.3 Primary source spine

- Procopius, *Wars*.
- Procopius, *Buildings*.
- Procopius, *Secret History*.
- Justinian's Code, Institutes, Digest selections, and Novels.
- John Malalas, *Chronicle*.
- *Chronicon Paschale*.
- John of Ephesus for plague and religious networks.
- Evagrius Scholasticus.
- Agathias for the later reign and Narses.
- Papal and conciliar material for the Three Chapters controversy.
- Inscriptions, coins, seals, mosaics, and archaeology where relevant.

### 18.4 Secondary research spine

The working bibliography should include multiple interpretations rather than one house historian:

- J. B. Bury.
- A. H. M. Jones.
- John Moorhead.
- J. A. S. Evans.
- Michael Maas, editor of *The Cambridge Companion to the Age of Justinian*.
- Anthony Kaldellis.
- Peter Sarris.
- Peter Heather.
- Averil Cameron and Alan Cameron where relevant.
- Geoffrey Greatrex on Persia and the Nika revolt.
- Specialist work on plague, late Roman administration, law, and provincial settlement.

### 18.5 Claim ledger

Every historical claim entering the game should receive:

```text
claim_id
claim
scenario_ids
source_type
source_citation
source_date
author_position_or_genre
corroboration
contradiction
confidence: high | medium | disputed
allowed_wording
prohibited_overstatement
review_status
```

This is where the Titans Forge Social Science Rubric will operate.

### 18.6 Rubric requirements

- No modern ideological slogans inserted into sixth-century actors.
- Explain power, office, property, doctrine, patronage, military necessity, and provincial interest.
- Preserve complexity and conflicting legitimate interests.
- Use period language where readable and provide concise glosses where necessary.
- Mark source hostility, panegyric, retrospective writing, and uncertainty.
- Do not confuse a primary source with an unbiased source.
- Do not use presentism as an excuse to hide coercion, violence, slavery, persecution, or mass death. Describe them in historically grounded terms.

---

## 19. Local Agent Contribution System

The existing Titans of War contribution pipeline should be adapted, not copied blindly.

### 19.1 Agent roles

| Agent | Scope |
|---|---|
| Caesar | Military objectives, commanders, force structure, logistics, battle consequences |
| Fox | Diplomacy, court coalitions, foreign rulers, negotiated settlements |
| Nemo | Human consequences, provincial voices, court scenes, narrative continuity |
| Historian | Claim ledger, chronology, source comparison, terminology audit |
| Asclepius | Disease, demographic disruption, care institutions, uncertainty controls |
| Auditor | Graph reachability, balance, schema validation, source completeness |

### 19.2 Contribution types

- Scenario proposal.
- Appointment profile.
- Province profile.
- Historical primer.
- Claim-ledger entry.
- Counterfactual branch.
- Balance adjustment.
- Media recommendation.
- Source challenge.

### 19.3 Approval pipeline

```text
draft -> submitted -> schema validation -> historical review
      -> gameplay review -> human approval -> integrated -> regression test
```

No agent output enters production automatically.

### 19.4 Automatic blockers

- Missing primary or high-quality secondary support.
- Anachronistic office, weapon, concept, or political language.
- Modern omniscient knowledge given to the player.
- Outcome revealed in the option label.
- Duplicate scenario purpose.
- Effects outside allowed bounds.
- Dead-end route without an intentional ending.
- Historical person active outside plausible dates or offices.
- Claims copied without attribution.
- Theodora reduced to a generic approval bonus.
- Factions represented as fixed modern parties.

---

## 20. User Experience

### 20.1 Primary screen

The main screen should feel like an imperial council table, not a modern corporate dashboard.

Recommended regions:

1. **Imperial Brief** - current decision, known facts, advisers, options.
2. **Empire Map** - fronts, supply routes, provincial stress, and current objective.
3. **Court and Offices** - active appointments and warnings.
4. **Treasury and Provisions** - only resources relevant to the present turn.
5. **Coalition Rail** - Senate, Hippodrome, army, provinces, Church, and Theodora.
6. **Imperial Ledger** - delayed commitments and promises.

The default view must not show every number at once. Detailed provincial and personnel information opens in drawers or dedicated views.

### 20.2 Required views

- Campaign screen.
- Appointment chamber.
- Province ledger.
- Military theater map.
- Historical context panel.
- Imperial chronicle.
- Save and restore panel.
- Final reign report.
- Walkthrough overlay that can be activated at any time.

### 20.3 Accessibility

- Full keyboard operation.
- Visible focus states.
- Text alternatives for maps and art.
- Reduced-motion support.
- Color-independent faction and metric indicators.
- Adjustable text density.
- Mobile layout tested as a complete vertical workflow.

### 20.4 Visual direction

The visual system should combine:

- Parchment and ivory for decisions and law.
- Charcoal and iron for military information.
- Porphyry as a limited imperial accent.
- Lapis, verdigris, and gold as secondary accents.
- Mosaic geometry and late Roman architectural rhythm.

It should avoid a one-note purple-and-gold theme, oversized decorative cards, modern glass panels, and a cluttered grand-strategy map.

---

## 21. Media and Audio

### 21.1 Image priorities

1. Justinian and Theodora mosaics.
2. Constantinople and the Hippodrome.
3. Hagia Sophia and rebuilding.
4. Maps of Persia, Africa, Italy, and the Mediterranean.
5. Belisarius, Narses, and campaign scenes.
6. Carthage, Rome, Ravenna, and Antioch.
7. Coins, law manuscripts, seals, armor, ships, and fortifications.
8. Plague and urban administration represented without sensational fantasy imagery.

### 21.2 Asset policy

- Use public-domain or clearly licensed museum and archive assets first.
- Record creator, institution, object date, source URL, license, file hash, crop, and scenarios.
- Ancient artwork being public domain does not automatically make every modern photograph free to redistribute.
- AI-generated images must record provider, date, prompt summary, and any provider-specific terms.
- No unresolved asset may be active in a public build.
- Maps should be code-native or based on legally reusable geographic data.

### 21.3 Audio policy

Audio is secondary to gameplay. Version 1 should use either:

- Verified public-domain/open recordings with file-level rights records.
- A restrained procedural soundscape.
- No music rather than questionable or poor-quality music.

Modern performances of ancient or liturgical music may remain copyrighted even when the composition is old.

---

## 22. Technical Architecture

Recommended foundation: React and Vite, borrowing tested infrastructure from Titans of War while keeping the new game in its own repository.

### 22.1 Proposed structure

```text
Titans_of_War_Rome_Reconquest/
  README.md
  LICENSE
  MEDIA_RIGHTS.md
  package.json
  vite.config.js
  public/
    fonts/
    images/
    audio/
  src/
    App.jsx
    components/
      ImperialBrief.jsx
      EmpireMap.jsx
      AppointmentChamber.jsx
      CoalitionRail.jsx
      ResourceLedger.jsx
      ProvinceLedger.jsx
      HistoricalContextPanel.jsx
      Chronicle.jsx
      ResultsScreen.jsx
      Walkthrough.jsx
      AppErrorBoundary.jsx
    data/
      scenarios/
      people/
      provinces/
      sources/
      media/
    game/
      initialState.js
      simulationEngine.js
      appointmentEngine.js
      provinceEngine.js
      diseaseEngine.js
      campaignGraph.js
      scoring.js
      saveSchema.js
      chronicleExporter.js
    agents/
      promptBuilder.js
      localModelAdapter.js
  tools/
    agents/
    validation/
    asset_audit/
  tests/
    engine/
    graph/
    content/
    browser/
  docs/
    historical-design-brief.md
    campaign-stage-map.md
    source-method.md
    social-science-rubric.md
    agent-contributions.md
```

### 22.2 Engine rules

- Deterministic resolution for identical state and choice input.
- Seeded variation only where uncertainty materially improves replay.
- Effects bounded by schema.
- Delayed effects stored explicitly, not hidden in component code.
- Scenario routing lives in the game layer, not UI click handlers.
- Historical content remains data-driven.
- No AI response can mutate canonical state without deterministic validation.
- Save files use an explicit version and migration path.

### 22.3 Optional local AI

AI can:

- Speak as advisers using the current state and approved historical primers.
- Challenge the player's reasoning.
- Summarize the reign.
- Compare two strategies.
- Draft noncanonical counterfactual reports.

AI cannot:

- Decide canonical consequences.
- Invent sources.
- alter saved state directly.
- Be required to complete the campaign.
- Replace authored advisers in the core game.

---

## 23. Testing Strategy

### 23.1 Engine tests

- Resources remain within bounds.
- Costs cannot be spent twice.
- Delayed effects fire once and at the correct stage.
- Appointment availability follows dates and prior events.
- Dead and removed people cannot advise or command.
- A commander cannot lead two simultaneous theaters without an explicit route.
- Provincial recovery depends on both resources and institutional capacity.
- Centralization and resilience remain independent.
- Disease effects vary by preparation and province but cannot be entirely prevented.

### 23.2 Graph tests

- Every option has a valid route or ending.
- Every intended ending is reachable.
- The approximate historical route is reachable.
- Limited reconquest, full reconquest, eastern-first, negotiated settlement, and collapse routes are reachable.
- No ordinary choice unexpectedly skips an act.
- Conditional scenarios cannot appear without their prerequisites.
- Nika, plague, and final audit cannot be silently skipped in Guided History mode.

### 23.3 Historical content tests

- Every scenario has source notes.
- Every named quotation has exact attribution.
- Dates and offices validate against person records.
- Disputed claims are labeled.
- Procopius citations name the work and passage.
- "Byzantine" and modern terminology are excluded from in-character text unless intentionally quoted.
- The Hippodrome and Circus Maximus are not confused.

### 23.4 Browser tests

Minimum Playwright path:

```text
load -> appointment -> decision -> delayed consequence
     -> save -> restore -> open context -> complete act -> export report
```

Additional paths:

- Nika survival and deposition.
- Ratified western war and refusal of western war.
- Plague with strong and weak provincial resilience.
- Narses funded and underfunded.
- Full campaign ending.
- Mobile campaign controls.
- Keyboard-only campaign.

### 23.5 Balance tests

- Enumerate or sample campaign paths.
- Identify dominant choices chosen only for score.
- Identify fake choices with the same effective result.
- Compare short-term and delayed value.
- Ensure historical choices are neither automatically optimal nor arbitrarily punished.
- Ensure maximum territorial expansion has real fiscal and administrative costs.
- Ensure minimal central authority has real coordination and military costs.

---

## 24. Implementation Phases

### Phase 0: Plan approval

Deliverables:

- Approved product thesis.
- Approved terminology and historical method.
- Approved playtime and campaign boundary.
- Approved first vertical slice.
- Initial research bibliography.

Exit criterion: No unresolved disagreement about what game is being built.

### Phase 1: Research spine and data contracts

Deliverables:

- Chronology from 527 to 565.
- Initial roster of people and offices.
- Province and theater definitions.
- Claim-ledger schema.
- Scenario schema.
- Source hierarchy and citation format.
- Media manifest schema.

Exit criterion: A historian or reviewer can trace each planned vertical-slice claim to its evidence.

### Phase 2: 527-532 vertical slice

Deliverables:

- Initial React/Vite project.
- Appointment system.
- Treasury and provisions.
- Imperial Reach and Provincial Resilience.
- Court, Senate, Blues, Greens, army, Church, and Theodora relationships.
- Eight to thirteen Act I stages.
- Nika survival, negotiation, flight, and deposition branches.
- Historical context panel.
- Final Act I report.
- Desktop and mobile UI.

Exit criterion: A new player can complete Act I, understand why the revolt happened, and describe how appointments and centralization affected the outcome.

### Phase 3: Campaign and province engine

Deliverables:

- Theater model.
- Commander model.
- Province model.
- Delayed effects.
- Supply, pay, and garrisons.
- Save schema and migration.
- Campaign graph validator.

Exit criterion: The Vandal expedition can be simulated from authorization through African settlement without hardcoded UI logic.

### Phase 4: Western campaigns

Deliverables:

- Act II scenarios.
- Vandal and Gothic campaign routes.
- Carthage, Africa, Sicily, Rome, and Ravenna settlement choices.
- Belisarius trust and autonomy arc.
- First full campaign map.

Exit criterion: The player can win Africa and Italy militarily yet fail to govern them, or choose a defensible limited strategy.

### Phase 5: Plague and imperial crisis

Deliverables:

- Disease engine.
- Act III scenarios.
- Eastern war and Antioch.
- Totila resurgence.
- Administrative mortality and succession pressure.
- Theodora's death and structural aftermath.

Exit criterion: Plague changes labor, tax, military, and administrative systems rather than acting as a flat penalty.

### Phase 6: Second reconquest and final settlement

Deliverables:

- Acts IV and V.
- Narses arc.
- Taginae and final Gothic settlement.
- Pragmatic Sanction.
- Three Chapters arc.
- Spain and late frontier branches.
- Succession and final report.

Exit criterion: At least six meaningfully different ending families are reachable and historically coherent.

### Phase 7: Agent contribution pipeline

Deliverables:

- Adapted contribution schemas.
- Historical claim validator.
- Agent dashboard and approval workflow.
- Draft contribution examples.
- Regression checks preventing unapproved integration.

Exit criterion: Agents can propose useful work but cannot alter canonical content without review.

### Phase 8: Media, accessibility, and polish

Deliverables:

- Cleared image catalog.
- Final map and art direction.
- Walkthrough.
- Keyboard and screen-reader pass.
- Sound policy implementation.
- Error boundary.
- Save compatibility message.

Exit criterion: Full desktop and mobile play-throughs complete without broken media, inaccessible controls, or hidden blockers.

### Phase 9: Beta and release

Deliverables:

- Closed historical review.
- Closed gameplay beta.
- Public issue template.
- README, license, media rights, credits, and source method.
- GitHub release.
- itch.io browser build.
- Promotional trailer and share cards.

Exit criterion: Build, tests, media audit, source audit, and packaging audit all pass from a clean checkout.

---

## 25. First Two Weeks of Work

### Days 1-2: Foundation

- Create the repository and project structure.
- Copy only reusable, proven infrastructure from Titans of War.
- Establish scenario, person, source, province, and delayed-effect schemas.
- Add test runner, graph validator, and clean browser build.

### Days 3-5: Historical spine

- Build the 527-532 chronology.
- Create profiles for Justinian, Theodora, Belisarius, Narses, Tribonian, John the Cappadocian, Mundus, Sittas, and Hypatius.
- Draft source records for Procopius, Malalas, the legal texts, and Nika scholarship.
- Write the first claim ledger.

### Days 6-8: Core engine

- Implement resources and faction relationships.
- Implement Imperial Reach and Provincial Resilience.
- Implement appointments, competence, independence, and delayed consequences.
- Add deterministic saveable state.

### Days 9-11: Nika vertical slice

- Write and wire the first appointment decisions.
- Add Hippodrome petition and faction escalation.
- Add official dismissal and crowd negotiation choices.
- Add Theodora's intervention.
- Add military suppression, flight, and settlement branches.

### Days 12-14: Product proof

- Build the primary screen, appointment chamber, context panel, and Act I report.
- Run full desktop and mobile tests.
- Conduct first source and presentism audit.
- Conduct first balance sweep.
- Package a private itch build for evaluation.

At the end of two weeks, the goal is not a large map. The goal is one historically rich, mechanically complete crisis proving that the entire design works.

---

## 26. Decisions for Review Before Implementation

### 26.1 Recommended campaign length

**Recommendation:** 75-120 minutes for a full run, with saves and act summaries. This is long enough for a quality historical campaign but substantially more approachable than a grand-strategy game.

### 26.2 Recommended campaign boundary

**Recommendation:** Begin in 527 and end in 565. Earlier background enters primers. Later consequences under Justin II appear in the final report, not as playable years in version 1.

### 26.3 Recommended first release scope

**Recommendation:** Justinian only. Do not add playable Belisarius, Theodora, Narses, or Khosrow campaigns until the imperial game is stable.

### 26.4 Recommended reconquest freedom

**Recommendation:** Allow the player to reject, limit, or delay western reconquest. The game is stronger if it can test Justinian's premise instead of requiring the player to agree with it.

### 26.5 Recommended alternate history rule

**Recommendation:** Permit major divergence, but require resources and institutional prerequisites. A player may build a looser western settlement or retain Theodora's influence differently; the player may not invent modern medicine, nationalism, communications, or administrative reach.

### 26.6 Recommended title

**Recommendation:** Use **Titans of War: Rome Reconquest** publicly, with **The Age of Justinian** as the subtitle. It communicates the premise while preserving the Titans of War series identity.

### 26.7 Recommended release model

**Recommendation:** Free, open source, browser-first, and local-first. AI remains optional. GitHub carries source and research method; itch.io carries immediate play.

---

## 27. Principal Risks

| Risk | Consequence | Control |
|---|---|---|
| Too many systems visible at once | Players abandon before first choice | Progressive disclosure and a narrow turn brief |
| Reconquest treated as simple map expansion | Historical and strategic shallowness | Settlement, garrison, tax, and provincial recovery stages |
| Theodora reduced to a loyalty meter | Poor history and weak gameplay | Independent network, policy agency, and structural aftermath |
| Senate treated as a modern legislature | Anachronism | Office, status, property, and dynastic influence model |
| Blues and Greens treated as parties | False certainty | Racing faction, patronage, crowd, and elite interaction model |
| Procopius treated as neutral | Biased and contradictory narrative | Work-specific citations and source comparison |
| Plague treated as random damage | Missed educational core | Labor, tax, army, burial, food, and administration systems |
| Centralization has one optimal setting | Mechanical shallowness | Separate reach and resilience with delayed effects |
| Too much battle detail | Emperor role disappears | Focus on objectives, appointments, supply, and settlements |
| AI writes canonical history | Hallucination and inconsistency | Authored core content and reviewed contribution pipeline |
| Image licensing postponed | Public-release blocker | File-level manifest from the first asset |
| Historical context overwhelms play | Slow pacing | Opt-in context and concise primary screen |

---

## 28. Definition of Production Ready

The game is production ready only when:

- A clean checkout installs, tests, and builds without warnings that affect play.
- The full campaign works on desktop and mobile.
- Every stage has a valid route and source record.
- All intended endings are reachable.
- Save and restore work across the current schema version.
- No AI model is required.
- Every active image and audio file has verified rights.
- The approximate historical path is coherent but not automatically optimal.
- At least two limited-reconquest and two full-reconquest strategies are viable.
- The player can survive Nika through more than one route.
- Plague cannot be avoided through anachronistic knowledge.
- Theodora, Senate, Hippodrome, provinces, Church, and army each have distinct mechanics.
- Centralization and provincial resilience produce visible delayed consequences.
- Historical reviewers have resolved or clearly flagged disputed claims.
- Beta testers can explain the central lesson without being told it in advance.

---

## 29. Initial Online Source Set

These are starting points, not the complete bibliography:

- [Procopius on the Nika revolt, Fordham Internet History Sourcebooks](https://sourcebooks.web.fordham.edu/source/procop-wars1.asp)
- [Procopius on the plague, Fordham Internet History Sourcebooks](https://sourcebooks.web.fordham.edu/source/542procopius-plague.asp)
- [Procopius, Vandal Wars, LacusCurtius public-domain translation](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Procopius/Wars/4C%2A.html)
- [Procopius, Gothic Wars and Ravenna, LacusCurtius](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Procopius/Wars/6E%2A.html)
- [Procopius, later Gothic War and Narses, LacusCurtius](https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Procopius/Wars/8H%2A.html)
- [The Institutes of Justinian, Project Gutenberg](https://www.gutenberg.org/files/5983/5983-h/5983-h.htm)
- [Annotated Justinian Code resource description, Institute of Advanced Legal Studies](https://resources.ials.sas.ac.uk/eagle-i/annotated-justinian-code)
- [Princeton primary-source guide to the Justinianic plague](https://middleagesforeducators.princeton.edu/justinianic-plague)
- [The Byzantine State under Justinian, Metropolitan Museum of Art](https://www.metmuseum.org/essays/the-byzantine-state-under-justinian-i-justinian-the-great)
- [San Vitale mosaics and imperial dress, Metropolitan Museum of Art](https://www.metmuseum.org/exhibitions/listings/2012/byzantium-and-islam/blog/topical-essays/posts/san-vitale)
- [Geoffrey Greatrex, The Nika Riot: A Reappraisal](https://www.cambridge.org/core/journals/journal-of-hellenic-studies/article/abs/nika-riot-a-reappraisal/E05AB3577A4D228D66BDA21B8BB87E6F)
- [The Pragmatic Sanction and civil government in Italy](https://penelope.uchicago.edu/Thayer/E/Gazetteer/Places/Europe/Italy/_Texts/HODIHI/2d_edition/7/13%2A.html)

---

## 30. Recommended Approval Point

The next build should begin only after review of these five decisions:

1. Approve the 527-565 campaign boundary.
2. Approve the 75-120 minute target run length.
3. Approve the two-axis Imperial Reach and Provincial Resilience model.
4. Approve Act I and Nika as the first vertical slice.
5. Approve free, open-source, browser-first release with optional local AI.

Once these are approved, implementation should begin with the historical data contracts and Act I vertical slice, not with image generation or the full Mediterranean map.
