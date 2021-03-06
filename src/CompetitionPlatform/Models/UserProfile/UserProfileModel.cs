﻿using System;
using System.Collections.Generic;
using CompetitionPlatform.Models.ProjectViewModels;
using Lykke.Service.PersonalData.Client.Models;
using Lykke.Service.PersonalData.Contract.Models;

namespace CompetitionPlatform.Models.UserProfile
{
    public class UserProfileViewModel
    {
        public IPersonalData Profile { get; set; }
        public string AvatarUrl { get; set; }
        public double WinningsSum { get; set; }
        public List<ProjectCompactViewModel> ParticipatedProjects { get; set; }
        public List<ProjectCompactViewModel> WonProjects { get; set; }
        public List<ProjectCompactViewModel> CreatedProjects { get; set; }
        public CommentsViewModel Comments { get; set; }
        public string AuthLink { get; set; }
        public bool IsLykkeMember { get; set; }
        public List<ProjectCompactViewModel> ExpertedProjects { get; set; }
    }

    public class UserProfileCommentData
    {
        public string ProjectName { get; set; }
        public string ProjectId { get; set; }
        public string FullName { get; set; }
        public string Comment { get; set; }
        public DateTime LastModified { get; set; }
    }

    public class CommentsViewModel
    {
        public List<UserProfileCommentData> CommentsList { get; set; }
        public string CommentAvatar { get; set; }
    }
}
