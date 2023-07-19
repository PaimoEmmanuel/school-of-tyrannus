import type { NextPage } from 'next'
import Head from 'next/head'
import NavigationBar from '../components/organisms/navigation-bar'
import { Box, Flex, Text } from '@chakra-ui/react'

const Terms: NextPage = () => {
	return (
		<>
			<Head>
				<title>Terms & Conditions - School of Tyrannus</title>
			</Head>
			<Box pos='relative'>
				<NavigationBar />
				<Box maxWidth='1100px' margin='40px auto' padding='0 24px'>
					<Text fontSize='13px' fontWeight='600' color='#ba5a52' marginBottom='15px'>
						LAST UPDATED: 24TH MAY, 2023
					</Text>
					<Text fontSize='32px' fontWeight='600'>
						Terms & Conditions
					</Text>

					<Flex direction='column' gap='20px' margin='20px 0'>
						<Text lineHeight='160%' textAlign='justify'>
							Thank you for using School of Tyrannus (&quot;we&quot; or &quot;us&quot;). These Terms & Conditions
							(&quot;Terms&quot;) govern your use of our e-learning platform. By accessing or using the School of Tyrannus
							platform, you agree to be bound by these Terms. If you do not agree with any provision of these Terms, please
							refrain from using our platform.
						</Text>

						<Text fontWeight='600'>Use of the Platform</Text>

						<Text>1.1 Eligibility</Text>
						<Text lineHeight='160%' textAlign='justify'>
							The School of Tyrannus platform is intended for individuals who are at least 13 years old. By using the
							platform, you represent and warrant that you are at least 13 years old. If you are accessing the platform on
							behalf of a minor, you are responsible for supervising their use and ensuring compliance with these Terms.
						</Text>

						<Text>1.2 User Account</Text>
						<Text lineHeight='160%' textAlign='justify'>
							To access certain features and services on the School of Tyrannus platform, you may be required to create a user
							account. You are responsible for maintaining the confidentiality of your account login credentials and for all
							activities that occur under your account. You agree to provide accurate and complete information when creating
							your account and to promptly update any information to keep it current and accurate.
						</Text>

						<Text>1.3 Prohibited Activities</Text>
						<Text lineHeight='160%' textAlign='justify'>
							When using the School of Tyrannus platform, you agree not to:
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							a) Violate any applicable laws, regulations, or third-party rights;
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							b) Engage in any activity that could disrupt, damage, or impair the platform&apos;s functionality or interfere
							with other users&apos; access or use of the platform;
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							c) Upload, post, or transmit any content that is unlawful, harmful, defamatory, infringing, or otherwise
							objectionable;
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							d) Use the platform for any unauthorized commercial purposes, such as advertising, solicitation, or promotion of
							goods or services without our prior written consent;
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							e) Attempt to gain unauthorized access to any portion of the platform, other users&apos; accounts, or any
							systems or networks connected to the platform;
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							f) Collect or store personal information of other users without their consent; or
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							g) Engage in any other activity that violates these Terms or is deemed inappropriate by us.
						</Text>

						<Text fontWeight='600' margin='20px 0 0'>
							Content and Intellectual Property Rights
						</Text>

						<Text>2.1 User-Generated Content</Text>
						<Text lineHeight='160%' textAlign='justify'>
							The School of Tyrannus platform may allow you to post, upload, or submit content, including comments, questions,
							reviews, or other materials (&quot;User-Generated Content&quot;). By posting User-Generated Content on the
							platform, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, modify, adapt, publish,
							display, distribute, and sublicense the content for any purpose related to the platform and our business.
						</Text>

						<Text>2.2 Intellectual Property</Text>
						<Text lineHeight='160%' textAlign='justify'>
							The School of Tyrannus platform and its contents, including but not limited to text, graphics, logos, images,
							audiovisual materials, and software, are owned or licensed by us and are protected by intellectual property
							laws. You acknowledge and agree that you will not reproduce, distribute, modify, create derivative works of,
							publicly display, publicly perform, republish, download, or transmit any material from the platform without our
							prior written consent.
						</Text>

						<Text fontWeight='600'>Limitation of Liability</Text>
						<Text lineHeight='160%' textAlign='justify'>
							To the extent permitted by applicable law, the School of Tyrannus and its affiliates, directors, officers,
							employees, agents, and licensors shall not be liable for any direct, indirect, incidental, special,
							consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use,
							data, or other intangible losses, resulting from your access to or use of the platform or any content available
							on the platform.
						</Text>

						<Text fontWeight='600'>Indemnification</Text>
						<Text lineHeight='160%' textAlign='justify'>
							You agree to indemnify and hold the School of Tyrannus and its affiliates, directors, officers, employees,
							agents, and licensors harmless from and against any claims, demands, actions, liabilities, damages, costs, and
							expenses, including reasonable attorneys&apos; fees, arising out of or related to your use of the platform, your
							violation of these Terms, or your infringement of any rights of any other person or entity.
						</Text>

						<Text fontWeight='600'>Governing Law and Jurisdiction</Text>
						<Text lineHeight='160%' textAlign='justify'>
							These Terms shall be governed by and construed in accordance with the laws of [insert jurisdiction]. Any dispute
							arising out of or relating to these Terms or the use of the School of Tyrannus platform shall be subject to the
							exclusive jurisdiction of the courts located in [insert jurisdiction].
						</Text>

						<Text fontWeight='600'>Termination</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We may, in our sole discretion, suspend or terminate your access to the School of Tyrannus platform, in whole or
							in part, at any time and for any reason, without prior notice or liability. Upon termination, these Terms will
							also terminate, and any provisions that by their nature should survive termination shall survive, including but
							not limited to provisions regarding intellectual property, limitation of liability, indemnification, and
							governing law.
						</Text>

						<Text fontWeight='600'>Modification of Terms</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We reserve the right to modify or update these Terms at any time, effective upon posting the updated Terms on
							the School of Tyrannus platform. Your continued use of the platform after the posting of any changes constitutes
							your acceptance of the modified Terms.
						</Text>

						<Text fontWeight='600'>Severability</Text>
						<Text lineHeight='160%' textAlign='justify'>
							If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions
							shall continue in full force and effect to the extent permitted by law.
						</Text>

						<Text fontWeight='600'>Contact Us</Text>
						<Text lineHeight='160%' textAlign='justify'>
							If you have any questions or concerns regarding these Terms or the School of Tyrannus platform, please contact
							us at{' '}
							<Text as='a' color='#ba5a52' href='mailto:support@tyrannus.com'>
								support@tyrannus.com
							</Text>
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							Thank you for using the School of Tyrannus platform. Enjoy your learning experience!
						</Text>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

export default Terms
