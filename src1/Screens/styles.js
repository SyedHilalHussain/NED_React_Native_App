import { StyleSheet,Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({


    // HeaderBackground 
    HeaderBackgroundbackgroundImage: {
        position: 'absolute',
        width: '100%',
        height: height * 0.4,
        top: 0,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden',
      },
      HeaderBackgroundoverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: height * 0.4,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
    // studentdashboard.js styles
    StudentDashboarddaysContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
    },
    StudentDashboardcontainer: {
      flex: 1,
      backgroundColor: '#121212',
    },
    StudentDashboardcontent: {
      padding: 16,
    },
    StudentDashboardprogressSection: {
      marginTop: -30, // Overlap with header for modern look
    },
    StudentDashboardanalyticsSection: {
      marginTop: 20,
    },
    StudentDashboardsectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      
    },
    StudentDashboardsectionTitle: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  
   
   
    StudentDashboardeventSection: {
      marginBottom: 30,
      height: 280, // Adjust this value based on your card height
    },
    
    StudentDashboardscrollContainer: {
      flexGrow: 0,
    },
    
    StudentDashboardeventScrollContent: {
      paddingHorizontal: 16,
      gap: 16, // Space between cards
      flexDirection: 'row',
    },
   StudentDashboardseeMoreText: {
      color: '#2eb086',
      fontSize: 14,
    },
  
 // Top.js Styles 
 Topheader: {
    // padding: 24,
    paddingTop: 48,
    paddingBottom: 32,
    marginBottom:30,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  TopheaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  TopprofileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  TopprofileImageContainer: {
    position: 'relative',
  },
  TopprofileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  ToponlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  TopheaderText: {
    marginLeft: 16,
  },
  TopwelcomeText: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    fontWeight: '500',
  },
  TopnameText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  TopnotificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopnotificationBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  TopprogramCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 20,
    padding: 16,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    
  },
  TopprogramInfo: {
    flex: 1,
  },
  Topsemester: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Topmajor: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    marginTop: 4,
  },
  Topbatch: {
    color: '#ffffff',
    fontSize: 12,
    opacity: 0.8,
    marginTop: 4,
  },
  TopviewProfileButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TopviewProfileText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
  ToparrowIcon: {
    marginLeft: 4,
  },

// progresscard.js code 
ProgressCardcard: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  ProgressCardprogressCard: {
    flex: 1,
    // marginRight: 8,
    backgroundColor: '#1E1E1E',
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'rgba(46, 176, 134, 0.1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  ProgressCardprogressGradient: {
    padding: 15,
    borderRadius: 16,
  },
  ProgressCardprogressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ProgressCardprogressIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  ProgressCardtitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProgressCardcardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  ProgressCardattendanceContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 18,
  },
  ProgressCardcircularProgressWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  ProgressCardcircularBackground: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    opacity: 0.2,
  },
  ProgressCardcircularProgress: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: 'rgba(46, 176, 134, 0.1)',
  },
  ProgressCardattendanceValue: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ProgressCardattendanceLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  ProgressCardattendanceLabel: {
    color: '#888888',
    fontSize: 14,
    marginLeft: 6,
  },
  ProgressCardcourseProgressContainer: {
    marginVertical: 15,
  },
  ProgressCardprogressBarContainer: {
    height: 8,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  ProgressCardprogressBar: {
    height: '100%',
    backgroundColor: '#2eb086',
    borderRadius: 4,
  },
  ProgressCardprogressStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  ProgressCardprogressText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  ProgressCardprogressPercentage: {
    color: '#2eb086',
    fontSize: 14,
    fontWeight: 'bold',
  },
  ProgressCardcardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  ProgressCardstatusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProgressCardstatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  ProgressCardstatusText: {
    color: '#888888',
    fontSize: 12,
  },
  ProgressCardupdateTime: {
    color: '#888888',
    fontSize: 12,
},

// Analyticscard code 

AnalyticsCardanalyticsCard: {
    backgroundColor: "#1e1e1e",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
  },
  AnalyticsCardanalyticsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  AnalyticsCardanalyticsTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  AnalyticsCardanalyticsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(46, 176, 134, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  AnalyticsCardanalyticsTitle: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  AnalyticsCardanalyticsChart: {
    backgroundColor: '#1e1e1e',
    marginLeft:-10,
    borderRadius: 16,
    padding: 0,
    marginBottom: 15,
    paddingLeft: -200,  // Add this
    overflow: 'hidden',  // Add thi
  },

//   DeadlinesSection style 
DeadlinesSectioncontainer: {
    paddingTop: 24,
  },
  DeadlinesSectionheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  DeadlinesSectionheaderLeft: {
    flex: 1,
  },
  DeadlinesSectionsectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  DeadlinesSectionactiveTasksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DeadlinesSectionactiveTasksNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#32D583',
    marginRight: 8,
  },
  DeadlinesSectionactiveTasksLabel: {
    fontSize: 16,
    color: '#666',
  },
  DeadlinesSectionfilterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  DeadlinesSectionfilterScroll: {
    marginBottom: 20,
  },
  DeadlinesSectionfilterContainer: {
    paddingHorizontal: 20,
  },
  DeadlinesSectionfilterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginRight: 12,
  },
  DeadlinesSectionfilterPillActive: {
    backgroundColor: '#32D583',
  },
  DeadlinesSectionfilterText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  DeadlinesSectionfilterTextActive: {
    color: '#fff',
    fontWeight: '500',
  },
  DeadlinesSectioncardsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  DeadlinesSectiondeadlineCard: {
    width: 300,
    padding: 20,
    marginRight: 16,
    borderRadius: 24,
    backgroundColor: '#1A1A1A',
    position: 'relative',
  },
  DeadlinesSectionprogressContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(50, 213, 131, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  DeadlinesSectionprogressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#32D583',
  },
  DeadlinesSectiondate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#32D583',
    marginBottom: 8,
  },
  DeadlinesSectiontitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    lineHeight: 32,
  },
  DeadlinesSectionsubjectContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    marginBottom: 16,
  },
  DeadlinesSectionsubjectText: {
    fontSize: 14,
    color: '#fff',
  },
  DeadlinesSectionbottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  DeadlinesSectiontimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DeadlinesSectiontimeText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#32D583',
  },
  DeadlinesSectiontypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DeadlinesSectiontypeText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  DeadlinesSectionpriorityIndicator: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 71, 87, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

//   CourseSchedule style 

CourseSchedulescheduleSection: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  CourseSchedulescheduleCard: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  CourseSchedulescheduleTime: {
    width: 60,
    alignItems: 'center',
    paddingTop: 8,
  },
  CourseScheduletimeText: {
    color: '#2eb086',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  CourseScheduletimelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2eb086',
    borderWidth: 2,
    borderColor: 'rgba(46, 176, 134, 0.2)',
  },
  CourseScheduletimelineLine: {
    width: 2,
    height: '100%',
    backgroundColor: 'rgba(46, 176, 134, 0.2)',
    position: 'absolute',
    top: 35,
    left: '50%',
  },
  CourseSchedulecourseInfo: {
    flex: 1,
    backgroundColor: '#1A1F25',
    borderRadius: 20,
    padding: 16,
    marginLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  CourseScheduleheaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  CourseScheduletitleContainer: {
    flex: 1,
  },
  CourseSchedulecourseTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  CourseScheduletimeRangePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  CourseScheduletimeRangeText: {
    color: '#2eb086',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  CourseSchedulearrowContainer: {
    padding: 8,
    marginRight: -8,
    marginTop: -4,
  },
  CourseScheduledivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 12,
  },
  CourseSchedulecourseDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  CourseScheduledetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CourseScheduledetailText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 8,
    opacity: 0.7,
  },


//   InternshipCard code 

InternshipCardcardWrapper: {
    margin: 16,
    borderRadius: 16,
    padding: 1.2,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
  },
  InternshipCardcard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
  },
  InternshipCardheader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  InternshipCardlogoContainer: {
    padding: 8,
    backgroundColor: '#262626',
    borderRadius: 12,
  },
  InternshipCardlogo: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  InternshipCardheaderContent: {
    flex: 1,
    marginLeft: 12,
  },
  InternshipCardcompanyName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: 0.2,
  },
  InternshipCardlocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  InternshipCardlocationText: {
    color: '#94A3B8',
    fontSize: 13,
    marginLeft: 4,
  },
  InternshipCardmenuButton: {
    padding: 4,
    marginLeft: 8,
  },
  InternshipCardpositionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  InternshipCardtagsRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  InternshipCardtag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    gap: 4,
  },
  InternshipCardspotsTag: {
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
  },
  InternshipCardtagText: {
    color: '#94A3B8',
    fontSize: 13,
  },
  InternshipCardspotsText: {
    color: '#2EB086',
  },
  InternshipCardprogressContainer: {
    marginBottom: 16,
  },
  InternshipCardprogressBar: {
    height: 4,
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 6,
  },
  InternshipCardprogressFill: {
    height: '100%',
    backgroundColor: '#2EB086',
    borderRadius: 2,
  },
  InternshipCardprogressText: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'right',
  },
  InternshipCardactions: {
    flexDirection: 'row',
    gap: 12,
  },
  InternshipCardbookmarkButton: {
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
  },
  InternshipCardapplyButton: {
    flex: 1,
    backgroundColor: '#2EB086',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  InternshipCardapplyButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },


//   Quick Action style 

QuickActionscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: 'rgba(46, 176, 134, 0.1)',
    borderWidth: 1,
    marginHorizontal: 18,
    marginVertical:10,
    marginTop:20,
    padding: 10,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  QuickActionsbuttonWrapper: {
    alignItems: 'center',
    padding: 4,
  },
  QuickActionsactionButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
  },
  QuickActionsselectedButton: {
    backgroundColor: '#2eb086',
  },
  QuickActionsactionText: {
    color: '#ffffff',
    marginTop: 8,
    fontSize: 13,
    fontWeight: '500',
  },
  QuickActionsselectedText: {
    color: '#ffffff',
    fontWeight: '600',
  },



//   ModernEventCard


ModernEventCardmodernEventCard: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 12,
    width: 350,
  },
  ModernEventCardeventBgImage: {
    width: '100%',
    height: '100%',
  },
  ModernEventCardeventOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    height: '100%',
    justifyContent: 'flex-end',
  },
  ModernEventCardeventCategory: {
    backgroundColor: 'rgba(46, 176, 134, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  ModernEventCardcategoryText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
  },
  ModernEventCardmodernEventTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ModernEventCardeventTimeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ModernEventCardeventTimeText: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: 4,
    marginRight: 12,
  },
  ModernEventCardtimeIcon: {
    marginLeft: 8,
  },

// SemesterRegistrationScreen

SemesterRegistrationScreencontainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  SemesterRegistrationScreenregistrationContainer: {
    flex: 1,
    marginTop: 50,
  },
  SemesterRegistrationScreenregistrationContent: {
    paddingTop: 20,
  },
// VerificationStep 

VerificationStepcontainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  VerificationStepcardContainer: {
    width: width - 32,
    overflow: 'hidden',
  },
  VerificationStepverificationCard: {
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
  },
  VerificationStepstatusRing: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#2EB086',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
  },
  VerificationStepinnerRing: {
    alignItems: 'center',
  },
  VerificationStepstatusText: {
    color: '#2EB086',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  VerificationStepsemesterText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    marginTop: 4,
  },
  VerificationStepverificationList: {
    width: '100%',
    gap: 12,
  },
  VerificationStepverificationItem: {
    width: '100%',
  },
  VerificationStepverificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(46, 176, 134, 0.05)',
  },
  VerificationStepverificationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  VerificationStepverifiedBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#121212',
    borderRadius: 10,
    padding: 2,
  },
  VerificationStepverificationText: {
    flex: 1,
  },
  VerificationStepverificationTitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
    marginBottom: 4,
  },
  VerificationStepverificationValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  VerificationStepbuttonContainer: {
    width: '100%',
    marginTop: 24,
  },
  VerificationStepprimaryButton: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  VerificationStepbuttonContent: {
    backgroundColor: '#2EB086',
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  VerificationStepbuttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },


//   CourseSelectionStep

CourseSelectionStepcontainer: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
  },
  CourseSelectionStepcourseListContainer: {
    flex: 1,
  },
  CourseSelectionStepcourseListContent: {
    paddingBottom: 20,
  },
  CourseSelectionStepcourseCard: {
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },
  CourseSelectionStepcourseCardContent: {
    padding: 16,
  },
  CourseSelectionStepselectedCourseCard: {
    borderWidth: 2,
    borderColor: '#2EB086',
  },
  CourseSelectionStepcourseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  CourseSelectionStepcourseIconContainer: {
    marginRight: 12,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    padding: 10,
    borderRadius: 10,
  },
  CourseSelectionStepcourseTitleContainer: {
    flex: 1,
  },
  CourseSelectionStepcourseTitleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  CourseSelectionStepcourseDetailsText: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  CourseSelectionStepcourseDescriptionText: {
    color: '#CCCCCC',
    fontSize: 14,
    marginBottom: 12,
  },
  CourseSelectionStepprereqContainer: {
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    padding: 10,
    borderRadius: 10,
  },
  CourseSelectionStepprereqLabel: {
    color: '#2EB086',
    fontSize: 12,
    marginBottom: 4,
  },
  CourseSelectionStepprereqText: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  CourseSelectionStepprimaryButton: {
    backgroundColor: '#2EB086',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  CourseSelectionStepdisabledButton: {
    backgroundColor: '#636363',
  },
  CourseSelectionStepbuttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

// ConfirmationStep.js

ConfirmationStepcontainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#121212',
    alignItems: 'center',
  },
  ConfirmationStepsummaryCard: {
    width: width - 32,
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  ConfirmationStepheaderContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  ConfirmationStepsuccessIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  ConfirmationStepsummaryTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ConfirmationStepsummarySubtitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 16,
  },
  ConfirmationStepcourseListContainer: {
    marginBottom: 24,
  },
  ConfirmationStepsummaryItem: {
    marginBottom: 12,
  },
  ConfirmationStepsummaryItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(46, 176, 134, 0.05)',
  },
  ConfirmationStepcourseIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(46, 176, 134, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  ConfirmationStepcourseDetailsContainer: {
    flex: 1,
  },
  ConfirmationStepsummaryItemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ConfirmationStepsummaryItemDetailsText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  ConfirmationSteptotalCreditsContainer: {
    width: '100%',
  },
  ConfirmationSteptotalCreditsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
  },
  ConfirmationSteptotalCreditsLabel: {
    color: '#2EB086',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ConfirmationSteptotalCreditsText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ConfirmationStepbuttonContainer: {
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
  },
  ConfirmationStepprimaryButton: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  ConfirmationStepbuttonContent: {
    backgroundColor: '#2EB086',
    paddingVertical: 18,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ConfirmationStepbuttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

//   RegistrationHeader.js style 

RegistrationHeaderheader: {
    paddingTop: 48,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  RegistrationHeaderheaderTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 24,
    paddingHorizontal: 16,
  },
  RegistrationHeaderuniversitySection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  RegistrationHeaderlogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  RegistrationHeadersemesterInfo: {
    marginLeft: 16,
  },
  RegistrationHeadersemesterText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  RegistrationHeaderdeadlineText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginTop: 4,
  },
  RegistrationHeadermenuButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegistrationHeadersearchSection: {
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 8,
  },
  RegistrationHeaderprogressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 26,
    padding: 12,
    marginBottom: 12,
    overflow: "hidden",
  },
  RegistrationHeaderprogressContent: {
    flex: 1,
  },
  RegistrationHeaderstepText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  RegistrationHeaderprogressText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginTop: 4,
  },
  RegistrationHeaderprogressIndicator: {
    width: '50%',
    height: 4,
    backgroundColor: '#2EB086',
    borderRadius: 2,
  },
  RegistrationHeaderchipContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    gap: 8,
  },
  RegistrationHeaderchip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(46, 176, 134, 0.1)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
  },
  RegistrationHeaderactiveChip: {
    backgroundColor: '#2EB086',
  },
  RegistrationHeaderchipText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },


//   SchedulePage style 

SchedulePagecontainer: {
    flex: 1,
    backgroundColor: '#121212',
  
  },
  SchedulePagetopContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    zIndex: 2,
    
  },
  SchedulePagedateStripWrapper: {
    position: "absolute",
    top: 150,
    left: 0,
    right: 0,
    zIndex: 2,
    overflow: "hidden",
    
  },
  SchedulePagetoggleContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  SchedulePagetoggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  SchedulePageactiveToggle: {
    backgroundColor: "#2EB086",
  },
  SchedulePagetoggleText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.7,
  },
  SchedulePageactiveToggleText: {
    opacity: 1,
  },
  SchedulePagecalendarToggle: {
    alignItems: "center",
    paddingVertical: 15,
    marginTop: 10,
  },
  SchedulePagetoggleLine: {
    width: 40,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
  },
  SchedulePagescheduleContainer: {
    flex: 1,
    marginTop: 320,
    
  },
  SchedulePagescheduleContent: {
    paddingTop: 20,
  },
  SchedulePagescheduleSection: {
    marginHorizontal: 15,
  },
// DateStrip page code 

DateStripdatescontainer: {
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(46, 176, 134, 0.1)",
    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  DateStripheaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  DateStripcalendarRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  DateStripcalendarIcon: {
    marginRight: 8,
  },
  DateStripmonthYearText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  DateStripnavigationButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  DateStripdaysContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  DateStripdayColumn: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    minWidth: 60,
  },
  DateStripdayText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    opacity: 0.7,
  },
  DateStriptodayDayText: {
    opacity: 1,
  },
  DateStripdateContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  DateStriptodayDateContainer: {
    // backgroundColor: '#007AFF',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#007AFF",
  },
  DateStripdateText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  DateStriptodayDateText: {
    color: "#fff",
  },
  DateStripselectedDateContainer: {
    backgroundColor: '#2EB086',
    borderRadius: 20,
  },
  DateStripselectedDayText: {
    color: '#2EB086',
    opacity: 1,
  },
  DateStripselectedDateText: {
    color: '#fff',
  },

//   CustomCalendar.js code 

CustomCalendaroverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  CustomCalendarcalendarContainer: {
    width: width - 40,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(30, 41, 59, 0.7)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  CustomCalendarheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  CustomCalendarmonthYearText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  CustomCalendarweekDaysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  CustomCalendarweekDayText: {
    width: "14.28%",
    textAlign: "center",
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10,
  },
  CustomCalendardayButton: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  CustomCalendardayText: {
    color: "#fff",
    fontSize: 16,
  },
  CustomCalendartodayButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    
  },
  CustomCalendartodayText: {
    color: "#fff",
    fontWeight: "600",
    padding: 10,
  },
  CustomCalendarselectedDay: {
    backgroundColor: "#007AFF",
    borderRadius: (width - 80) / 14,
  },
  CustomCalendarselectedDayText: {
    color: "#fff",
    fontWeight: "600",
  },
// CourseSchedule design is pasted above
// DetailSchedule design
DetailSchedulePagecontainer: {
  flex: 1,
  backgroundColor: '#0f172a',
},
DetailSchedulePageheaderContainer: {
  height: 300,
  width: width,
},
DetailSchedulePageheaderImage: {
  width: '100%',
  height: '100%',
  position: 'absolute',
},
DetailSchedulePagegradient: {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: '70%',
},
DetailSchedulePagebackButton: {
  position: 'absolute',
  top: 20,
  left: 20,
  zIndex: 2,
},
DetailSchedulePagecourseInfoOverlay: {
  position: 'absolute',
  top: 100,
  left: 20,
  right: 20,
},
DetailSchedulePagecourseTitle: {
  fontSize: 28,
  fontWeight: '700',
  color: '#fff',
},
DetailSchedulePagecourseCode: {
  fontSize: 16,
  color: '#fff',
  opacity: 0.8,
  marginTop: 4,
},
DetailSchedulePagedateTimeContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 12,
},
DetailSchedulePagedateText: {
  fontSize: 16,
  color: '#fff',
},
DetailSchedulePagetimeText: {
  fontSize: 16,
  color: '#fff',
  opacity: 0.8,
},
DetailSchedulePagecontentSection: {
  flex: 1,
  padding: 20,
  marginVertical:15,
},
DetailSchedulePagesection: {
  marginBottom: 24,
},
DetailSchedulePagesectionTitle: {
  fontSize: 14,
  fontWeight: '600',
  color: '#fff',
  opacity: 0.7,
  marginBottom: 12,
  letterSpacing: 1,
},
DetailSchedulePagecard: {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 15,
  padding: 16,
},
DetailSchedulePagelocationText: {
  fontSize: 16,
  color: '#fff',
},
DetailSchedulePagecheckText: {
  fontSize: 14,
  color: '#fff',
  marginBottom: 8,
  lineHeight: 20,
},
DetailSchedulePagelecturerText: {
  fontSize: 16,
  color: '#fff',
},
DetailSchedulePageresourceItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(255, 255, 255, 0.1)',
},
DetailSchedulePageresourceText: {
  fontSize: 14,
  color: '#fff',
  marginLeft: 12,
  flex: 1,
},
DetailSchedulePageresourceType: {
  fontSize: 12,
  color: '#fff',
  opacity: 0.7,
},
DetailSchedulePageassignmentItem: {
  paddingVertical: 8,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(255, 255, 255, 0.1)',
},
DetailSchedulePageassignmentTitle: {
  fontSize: 14,
  color: '#fff',
},
DetailSchedulePageassignmentDue: {
  fontSize: 12,
  color: '#fff',
  opacity: 0.7,
  marginTop: 4,
},
// StudentProfile design code 

StudentProfilebackgroundImage: {
  position: 'absolute',
  width: '100%',
  height: height * 0.4,
  top: 0,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  overflow: 'hidden',
},
StudentProfileoverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: height * 0.4,
  backgroundColor: 'rgba(0,0,0,0.5)', // Adds a slight dark overlay for better text visibility
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
},
StudentProfilecontainer: {
flex: 1,
backgroundColor: '#0f172a',
},
StudentProfileheaderGradient: {
position: 'absolute',
top: 0,
left: 0,
right: 0,
height: height * 0.4,
borderBottomLeftRadius: 30,
borderBottomRightRadius: 30,
},
StudentProfileprofileContainer: {
paddingTop: 30,
paddingBottom: 30,
alignItems: 'center',
},
StudentProfileavatarContainer: {
marginBottom: 20,
shadowColor: '#000',
shadowOffset: { width: 0, height: 8 },
shadowOpacity: 0.44,
shadowRadius: 10.32,
elevation: 16,
},
StudentProfileavatar: {
width: 120,
height: 120,
borderRadius: 60,
borderWidth: 4,
borderColor: '#4ade80',
},
StudentProfilebadgeContainer: {
position: 'absolute',
bottom: 0,
right: 0,
backgroundColor: '#fff',
borderRadius: 15,
width: 30,
height: 30,
alignItems: 'center',
justifyContent: 'center',
borderWidth: 2,
borderColor: '#4ade80',
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
},
StudentProfileuserName: {
fontSize: 28,
fontWeight: 'bold',
color: '#fff',
marginBottom: 10,
textShadowColor: 'rgba(0, 0, 0, 0.3)',
textShadowOffset: { width: 0, height: 2 },
textShadowRadius: 4,
},
StudentProfiletagContainer: {
flexDirection: 'row',
alignItems: 'center',
backgroundColor: 'rgba(255, 255, 255, 0.15)',
paddingHorizontal: 16,
paddingVertical: 8,
borderRadius: 20,
borderWidth: 1,
borderColor: 'rgba(255, 255, 255, 0.2)',
},
StudentProfiletagIcon: {
marginRight: 8,
},
StudentProfiletagText: {
color: '#fff',
fontSize: 14,
fontWeight: '500',
},
StudentProfilestatsContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
paddingHorizontal: 16,
marginTop: -20,
},
StudentProfileglassCard: {
width: width / 3.5,
aspectRatio: 1,
borderRadius: 20,
padding: 15,
alignItems: 'center',
justifyContent: 'center',
borderWidth: 1,
borderColor: 'rgba(255, 255, 255, 0.1)',
backgroundColor: '#1e293b',
overflow: 'hidden',
},
StudentProfilestatCard: {
backgroundColor: '#1e293b',
borderRadius: 16,
padding: 16,
width: width * 0.28,
alignItems: 'center',
borderWidth: 1,
borderColor: 'rgba(255, 255, 255, 0.1)',
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.3,
shadowRadius: 4.65,
elevation: 8,
},
StudentProfilestatIconContainer: {
width: 40,
height: 40,
borderRadius: 20,
alignItems: 'center',
justifyContent: 'center',
marginBottom: 8,
},
StudentProfilestatValue: {
fontSize: 20,
fontWeight: 'bold',
color: 'white',
marginBottom: 4,
},
StudentProfilestatTitle: {
fontSize: 12,
color: 'rgba(255, 255, 255, 0.7)',
},
//   statIconBg: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 12,
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#94a3b8',
//     fontWeight: '500',
//   },
StudentProfiledetailsContainer: {
padding: 16,
marginTop: 20,
},
StudentProfiledetailSection: {
backgroundColor: '#1e293b',
borderRadius: 16,
marginBottom: 16,
overflow: 'hidden',
borderWidth: 1,
borderColor: 'rgba(255, 255, 255, 0.1)',
shadowColor: '#000',
shadowOffset: { width: 0, height: 4 },
shadowOpacity: 0.3,
shadowRadius: 4.65,
elevation: 8,
},
StudentProfilesectionHeader: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
padding: 16,
},
StudentProfileheaderLeft: {
flexDirection: 'row',
alignItems: 'center',
},
StudentProfileheaderIcon: {
width: 40,
height: 40,
borderRadius: 20,
alignItems: 'center',
justifyContent: 'center',
marginRight: 12,
},
StudentProfileheaderTitle: {
fontSize: 16,
fontWeight: '600',
color: '#fff',
},
StudentProfilesectionContent: {
overflow: 'hidden',
},
StudentProfileinfoRow: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
paddingVertical: 12,
paddingHorizontal: 16,
borderBottomWidth: 1,
borderBottomColor: 'rgba(255, 255, 255, 0.1)',
},
StudentProfileinfoLabel: {
fontSize: 14,
color: '#94a3b8',
fontWeight: '500',
},
StudentProfileinfoValue: {
fontSize: 14,
color: '#fff',
fontWeight: '500',
},

// InternshipsPage code 
InternshipsPagecontainer: {
  flex: 1,
  backgroundColor: "#121212",
},

InternshipsPagedateStripWrapper: {
  position: "absolute",
  top: 150,
  left: 0,
  right: 0,
  zIndex: 2,
  overflow: "hidden",
},
InternshipsPagetoggleContainer: {
  flexDirection: "row",
  marginHorizontal: 20,
  borderRadius: 25,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.1)",
},
InternshipsPagetoggleButton: {
  flex: 1,
  paddingVertical: 12,
  alignItems: "center",
},
InternshipsPageactiveToggle: {
  backgroundColor: "#2EB086",
},
InternshipsPagetoggleText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "600",
  opacity: 0.7,
},
InternshipsPageactiveToggleText: {
  opacity: 1,
},
InternshipsPagecalendarToggle: {
  alignItems: "center",
  paddingVertical: 15,
  marginTop: 10,
},
InternshipsPagetoggleLine: {
  width: 40,
  height: 4,
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  borderRadius: 2,
},
InternshipsPageinternshipsContainer: {
  flex: 1,
  marginTop: 50,
},
InternshipsPageinternshipsContent: {
  paddingTop: 20,
},
InternshipsPageinternshipsList: {
  marginHorizontal: 15,
},


// InternshipsHeader code 
InternshipHeaderheader: {
  paddingTop: 48,
  // paddingBottom: 32,
  // marginBottom: 30,
  borderBottomLeftRadius: 32,
  borderBottomRightRadius: 32,
},
InternshipHeaderheaderTop: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 24,
  paddingHorizontal: 16,
},
InternshipHeaderprofileSection: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
},
InternshipHeaderprofileImageContainer: {
  position: 'relative',
},
InternshipHeaderprofileImage: {
  width: 65,
  height: 65,
  borderRadius: 32,
  borderWidth: 2,
  borderColor: '#ffffff',
},
InternshipHeaderonlineIndicator: {
  position: 'absolute',
  bottom: 5,
  right: 5,
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: '#10B981',
  borderWidth: 2,
  borderColor: '#ffffff',
},
InternshipHeaderheaderText: {
  marginLeft: 16,
},
InternshipHeaderwelcomeText: {
  color: '#ffffff',
  fontSize: 14,
  opacity: 0.9,
  fontWeight: '500',
},
InternshipHeadernameText: {
  color: '#ffffff',
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 4,
},
InternshipHeadernotificationButton: {
  width: 65,
  height: 65,
  borderRadius: 32,
  backgroundColor: 'rgba(46, 176, 134, 0.1)',
  justifyContent: 'center',
  alignItems: 'center',
},
InternshipHeadernotificationBadge: {
  position: 'absolute',
  top: 20,
  right: 20,
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: '#EF4444',
  borderWidth: 2,
  borderColor: '#ffffff',
},

// New styles for internship search section
InternshipHeadersearchSection: {
  paddingHorizontal: 16,
  gap: 16,
  marginTop: 8,
},
InternshipHeadersearchBar: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgba(46, 176, 134, 0.1)',
  borderRadius: 26,
  padding: 12,
  marginBottom: 12,
  overflow: "hidden",
},
InternshipHeadersearchInput: {
  flex: 1,
  marginLeft: 12,
  marginRight: 8,
},
InternshipHeadersearchPlaceholder: {
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 16,
},
InternshipHeaderfilterButton: {
  padding: 4,
  backgroundColor: 'rgba(46, 176, 134, 0.1)',
  borderRadius: 8,
},
InternshipHeaderfilterContainer: {
  flexDirection: 'row',
  paddingVertical: 4,
  gap: 8,
},
InternshipHeaderfilterChip: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgba(46, 176, 134, 0.1)',
  borderRadius: 20,
  paddingHorizontal: 12,
  paddingVertical: 8,
  gap: 6,
},
InternshipHeaderactiveChip: {
  backgroundColor: '#2EB086',
},
InternshipHeaderfilterText: {
  color: '#ffffff',
  fontSize: 14,
  fontWeight: '500',
},
//  Internship Card code is pasted above
// EventPage code 

EventsPagecontainer: {
  flex: 1,
  backgroundColor: "#0f172a",
},
EventsPagetopContainer: {
  position: "absolute",
  top: 50,
  left: 0,
  right: 0,
  zIndex: 2,
},
EventsPagedateStripWrapper: {
  position: "absolute",
  top: 150, // Adjust based on your topContainer height
  left: 0,
  right: 0,
  zIndex: 2,
  overflow: "hidden",
},
EventsPagetoggleContainer: {
  flexDirection: "row",
  marginHorizontal: 20,
  borderRadius: 25,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.1)",
},
EventsPagetoggleButton: {
  flex: 1,
  paddingVertical: 12,
  alignItems: "center",
},
EventsPageactiveToggle: {
  backgroundColor: "#2EB086",
},
EventsPagetoggleText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "600",
  opacity: 0.7,
},
EventsPageactiveToggleText: {
  opacity: 1,
},
EventsPagecalendarToggle: {
  alignItems: "center",
  paddingVertical: 15,
  marginTop: 10,
},
EventsPagetoggleLine: {
  width: 40,
  height: 4,
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  borderRadius: 2,
},
EventsPageeventsContainer: {
  flex: 1,
  marginTop: 320, // Should match the top position of dateStripWrapper
},
EventsPageeventsContent: {
  paddingTop: 20,
},
EventsPageeventsevent: {
  marginHorizontal: 15,
},


// Attendance Page 
AttendancePageattendancecontainer: {
  flex: 1,
  backgroundColor: '#0f172a',
  
},
AttendancePagetopContainer: {
  position: 'absolute',
  top: 50,
  left: 0,
  right: 0,
  zIndex: 2,
},
AttendancePagetoggleContainer: {
  flexDirection: 'row',
  marginHorizontal: 20,
  borderRadius: 25,
  overflow: 'hidden',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
},
AttendancePagetoggleButton: {
  flex: 1,
  paddingVertical: 12,
  alignItems: 'center',
},
AttendancePageactiveToggle: {
  backgroundColor: '#2EB086',
},
AttendancePagetoggleText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '600',
  opacity: 0.7,
},
AttendancePageactiveToggleText: {
  opacity: 1,
},


AttendancePagecoursesContainer: {
  gap: 15,
  paddingTop:300,
  marginHorizontal:20,
  marginVertical: '10%',
  
  
},
AttendancePagecourseCard: {
  padding: 15,
  borderRadius: 15,
  overflow: 'hidden',
 
  borderWidth: 1,
  borderColor: 'rgba(46, 176, 134, 0.1)',
  
},
AttendancePagecourseHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 15,
},
AttendancePagecourseTitle: {
  color: '#fff',
  fontSize: 18,
  fontWeight: '600',
},
AttendancePageattendanceTag: {
  backgroundColor: 'rgba(46, 176, 134, 0.2)',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 12,
},
AttendancePageattendancePercentage: {
  color: '#2EB086',
  fontSize: 14,
  fontWeight: '600',
},
AttendancePageattendanceDetails: {
  marginBottom: 10,
},
AttendancePageattendanceText: {
  color: '#fff',
  opacity: 0.8,
  marginBottom: 8,
},
AttendancePageprogressBar: {
  height: 6,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 3,
},

AttendancePagelastUpdate: {
  color: '#fff',
  opacity: 0.6,
  fontSize: 12,
},
AttendancePageanalyticsContainer: {
  gap: 20,
},
AttendancePagechartContainer: {
  marginBottom: 20,
},
AttendancePagechart: {
  borderRadius: 16,
},
AttendancePagesubjectProgress: {
  gap: 15,
},
AttendancePageprogressItem: {
  marginBottom: 15,
},
AttendancePageprogressItemText: {
  color: '#fff',
  marginBottom: 8,
},
AttendancePageprogressBarContainer: {
  height: 25,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 12.5,
  overflow: 'hidden',
  position: 'relative',
},
AttendancePageprogressBarAnalytics: {
  height: '100%',
  backgroundColor: '#2EB086',
  borderRadius: 12.5,
},
AttendancePageprogressPercentage: {
  position: 'absolute',
  right: 10,
  color: '#fff',
  fontSize: 12,
  lineHeight: 25,
},

AttendancePagecalendarToggle: {
  alignItems: "center",
  paddingVertical: 15,
  marginTop: 10,
},
AttendancePagetoggleLine: {
  width: 60,
  height: 4,
  backgroundColor: "rgba(250, 249, 249, 0.59)",
  borderRadius: 2,
},
AttendancePageheaderRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  marginBottom: 15,
},
AttendancePagecalendarRow: {
  flexDirection: "row",
  alignItems: "center",
},
AttendancePagecalendarIcon: {
  marginRight: 8,
},
AttendancePagemonthYearText: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "500",
},
AttendancePagenavigationButtons: {
  flexDirection: "row",
  alignItems: "center",
  gap: 5,
},
AttendancePagedaysContainer: {
  flexDirection: "row",
  paddingHorizontal: 16,
  marginBottom: 16,
},
AttendancePagedayColumn: {
  alignItems: "center",
  justifyContent: "center",
  marginRight: 20,
  minWidth: 60,
},
AttendancePagedayText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "500",
  marginBottom: 8,
  opacity: 0.7,
},
AttendancePagetodayDayText: {
  opacity: 1,
},
AttendancePagedateContainer: {
  width: 40,
  height: 40,
  alignItems: "center",
  justifyContent: "center",
},
AttendancePagetodayDateContainer: {
  // backgroundColor: '#007AFF',
  borderRadius: 20,
  borderWidth: 2,
  borderColor: "#007AFF",
},
AttendancePagedateText: {
  color: "#fff",
  fontSize: 20,
  fontWeight: "600",
},
AttendancePagetodayDateText: {
  color: "#fff",
},

AttendancePageselectedDay: {
  backgroundColor: "#007AFF",
  borderRadius: (width - 80) / 14,
},

AttendancePageselectedDayText: {
  color: "#fff",
  fontWeight: "600",
},
AttendancePageemptyDay: {
  color: "transparent",
},
AttendancePagedatescontainer: {
  paddingVertical: 10,
  marginHorizontal: 10,
  borderRadius: 15,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: "rgba(46, 176, 134, 0.1)",
  // backgroundColor: 'rgba(255, 255, 255, 0.5)',
},
AttendancePagegraphCard: {
  borderRadius: 20,
  padding: 20,
  marginTop:'90%',
  marginHorizontal:20,
  marginBottom: 20,
  borderWidth: 1,
  borderColor: 'rgba(46, 176, 134, 0.1)',
  backgroundColor: 'rgba(15, 23, 42, 0.7)',
},
AttendancePagegraphHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 20,
},
AttendancePagegraphTitleContainer: {
  flexDirection: 'row',
  alignItems: 'center',
},
AttendancePagegraphIcon: {
  width: 36,
  height: 36,
  borderRadius: 18,
  backgroundColor: 'rgba(46, 176, 134, 0.2)',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
},
AttendancePagegraphTitle: {
  color: '#fff',
  fontSize: 18,
  fontWeight: '600',
},
AttendancePageprogressCard: {
  borderRadius: 15,
  padding: 15,
  marginHorizontal:20,
  marginBottom: 10,
  borderWidth: 1,
  borderColor: 'rgba(46, 176, 134, 0.1)',
  backgroundColor: 'rgba(15, 23, 42, 0.7)',
},
AttendancePageprogressWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
},
AttendancePageprogressBackground: {
  flex: 1,
  height: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 4,
  overflow: 'hidden',
},
AttendancePageprogressFill: {
  height: '100%',
  backgroundColor: '#2EB086',
  borderRadius: 4,

},
AttendancePagesubjectName: {
  color: '#fff',
  fontSize: 16,
  marginBottom: 10,
},
AttendancePageprogressText: {
  color: '#fff',
  fontSize: 14,
  opacity: 0.8,
  width: 45,
  textAlign: 'right',
},
AttendancePageprogressBarsContainer: {
  gap: 10,},


// DetailedInternshipsPage 

DetailedInternshipcontainer: {
  flex: 1,
  backgroundColor: '#0f172a',
},
DetailedInternshipfixedHeader: {
  position: "absolute",
  // top: 50,
  left: 0,
  right: 0,
  zIndex: 2,
  flexDirection: 'column',
  alignItems: 'center',
  padding: 16,
  paddingTop: 10,
  marginBottom:200,
  paddingBottom: 50,
 

},

DetailedInternshipheaderButtons: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: 8,
},
DetailedInternshipheaderButton: {
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderRadius: 20,
  backgroundColor: 'rgba(46, 176, 134, 0.2)',
},
DetailedInternshipactiveHeaderButton: {
  backgroundColor: '#2EB086',
},
DetailedInternshipheaderButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: '600',
},
DetailedInternshipactiveHeaderButtonText: {
  opacity: 1,
},
DetailedInternshipscrollView: {
  flex: 1,
},
DetailedInternshipcontent: {
  padding: 16,
  
  gap: 16,
},
DetailedInternshipcompanyCard: {
  padding: 20,
  borderRadius: 20,
  alignItems: 'center',
 
 
},
DetailedInternshipbackButton: { // New style for back button
  position: 'absolute',
  top: 10,
  left: 10,
  zIndex: 1,
  backgroundColor:'rgba(46, 176, 134, 0.4)',
  borderRadius: 20,
  padding:5,
  
},
DetailedInternshipcompanyLogo: {
  width: 80,
  height: 80,
  // borderRadius: 20,
  marginBottom: 16,
},
DetailedInternshipposition: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 8,
},
DetailedInternshipcompany: {
  fontSize: 16,
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: 16,
},
DetailedInternshiptags: {
  flexDirection: 'row',
  // flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'center',
},
DetailedInternshiptag: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgba(46, 176, 134, 0.2)',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 20,
  gap: 6,
},
DetailedInternshiptagText: {
  color: '#fff',
  fontSize: 14,
},
DetailedInternshipsection: {
  padding: 20,
  borderRadius: 20,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
},
DetailedInternshipsectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 16,
},
DetailedInternshiprequirementItem: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginBottom: 12,
},
DetailedInternshipbullet: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: '#2EB086',
  marginTop: 8,
  marginRight: 12,
},
DetailedInternshiprequirementText: {
  flex: 1,
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: 15,
  lineHeight: 22,
},
DetailedInternshipbenefitItem: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
  gap: 12,
},
DetailedInternshipbenefitText: {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: 15,
},
DetailedInternshipdescriptionText: {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: 15,
  lineHeight: 24,
},
DetailedInternshipapplyContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
  borderTopWidth: 1,
  borderTopColor: 'rgba(46, 176, 134, 0.2)',
},
DetailedInternshipdeadlineInfo: {
  flex: 1,
},
DetailedInternshipdeadlineLabel: {
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: 12,
},
DetailedInternshipdeadlineDate: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},
DetailedInternshipapplyButton: {
  backgroundColor: '#2EB086',
  paddingHorizontal: 24,
  paddingVertical: 12,
  borderRadius: 25,
},
DetailedInternshipapplyButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
DetailedInternshipeventsContainer: {
  flex: 1,
  marginTop: 310, // Should match the top position of dateStripWrapper

},
DetailedInternshipeventsContent: {
  paddingTop: 0,
},
  // GPADisplay Page 
  GpaDisplaycontainer: {
    flex: 1,
    backgroundColor: '#121212',
    
  },
  GpaDisplaycoursesContainer: {
    flex: 1,
    padding: 16,
    
    
    
    marginTop:70,
  },
  GpaDisplaycoursesviewContainer:{
   
    paddingBottom:30,
  },
  
  // CourseCard
 
  CourseCardcourseCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    marginBottom: 12,
   
    overflow: 'hidden',
  },
  CourseCardcourseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  CourseCardcourseName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  CourseCardcourseCode: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
  CourseCardgpaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  CourseCardgpaText: {
    color: '#2EB086',
    fontSize: 20,
    fontWeight: 'bold',
  },
  CourseCardexpandedContent: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  CourseCardsection: {
    marginBottom: 16,
  },
  CourseCardsectionTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  CourseCardoutcomeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  CourseCardoutcomeText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    flex: 1,
  },
  CourseCardstatusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  
  // Analyticalview page design 
  AnalyticsViewanalyticsContainer: {
    padding: 16,
    marginTop:70,
  },
  AnalyticsViewchartCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  AnalyticsViewchartTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  AnalyticsViewchart: {
    borderRadius: 16,
    marginVertical: 8,
  },

  
  });