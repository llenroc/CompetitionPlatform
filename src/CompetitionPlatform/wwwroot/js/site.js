﻿$(function () {
    $('#projectStatusFilter')
        .change(function () {
            $('#projectListResults').load('Home/GetProjectList?projectStatusFilter=' +
                $('#projectStatusFilter :selected').val() + '&projectCategoryFilter=' +
                $('#projectCategoryFilter :selected').val().replace(/\s/g, '') + '&projectPrizeFilter=' + $('#projectPrizeFilter :selected').val());
        });

    $('#projectCategoryFilter')
        .change(function () {
            $('#projectListResults').load('Home/GetProjectList?projectStatusFilter=' +
                $('#projectStatusFilter :selected').val() + '&projectCategoryFilter=' +
                $('#projectCategoryFilter :selected').val().replace(/\s/g, '') + '&projectPrizeFilter=' + $('#projectPrizeFilter :selected').val());
        });

    $('#projectPrizeFilter')
        .change(function () {
            $('#projectListResults').load('Home/GetProjectList?projectStatusFilter=' +
                $('#projectStatusFilter :selected').val() + '&projectCategoryFilter=' +
                $('#projectCategoryFilter :selected').val().replace(/\s/g, '') + '&projectPrizeFilter=' + $('#projectPrizeFilter :selected').val());
        });

    $('#voteForButton')
        .click(function () {
            var $this = $(this);

            if ($this.text().trim() === '') {
                $this.append('Yes');
            }

            $('#projectVoteResults').load('/ProjectDetails/VoteFor?projectId=' + $('#ProjectId').val());
        });

    $('#voteAgainstButton')
        .click(function () {
            var $this = $(this);

            if ($this.text().trim() === '') {
                $this.append('No');
            }

            $('#projectVoteResults').load('/ProjectDetails/VoteAgainst?projectId=' + $('#ProjectId').val());
        });

    function barWidth() {
        var barWidth = $('.progress-bar').width();
        $('.progress-fill-text').css('width', barWidth);
    }

    barWidth();

    window.onresize = function() {
        barWidth();
    };

    $('#voteTestButton')
        .click(function (e) {
            e.preventDefault();
            $('#projectDetailsTabs a[href="#Results"]').tab('show');
        });

    $('.replyToCommentButton')
       .click(function () {
           var id = '#' + this.id;
           $(id).load('/ProjectDetails/GetCommentReplyForm?commentId=' + this.id + '&projectId=' + $('#projectId').val());
           $('.' + this.id).hide();
       });

    $('#file').change(function () {
        $("#fileInputHelperText").empty();
        $("#fileInputHelperText").append(this.value.split('\\').pop());
    });

    tinymce.init({
        selector: 'textarea.richEditor',
        plugins: 'link'
    });

    //restyling js

    $('._show_hidden_form').on('click', function (ev) {
        ev.preventDefault();
        $(this).hide().siblings('.hidden_form').show();
    });

    $('#msg')
        .bind('blur',
            function() {
                if (!$(this).val()) {
                    $(this).parents('.form--message').removeClass('focused');
                    $(this).parents('.message_card__inner').removeAttr('style');
                }
            })
        .bind('focus', function() { $(this).parents('.form--message').addClass('focused'); })
        .keyup(function() {
            if ($(this).val()) {
                $(this).parents('.form--message').addClass('with_value');
            } else {
                $(this).parents('.form--message').removeClass('with_value');
            }
        });

    $('#msg')
      .each(function () { autosize(this); })
      .on('autosize:resized', function () {
          $('.message_card__inner').css({ height: 'auto' });
      });

    $('._voting_btn').on('click', function () {
        $(this).toggleClass('active').siblings('._voting_btn').toggleClass('invisible').parents('.voting_group').toggleClass('voted');
    });

    $('#datetimepicker1').datetimepicker();
});
