import React from 'react'

const PitchTest = () => {

  return (
    <div> hi </div>
    // <body ng-app="SquadSelectorApp">
    //   <div class="home-container" ng-controller="Home">
    //     <aside class="sidebar-container">
    //       <div class="title">
    //         <h1>Squad Builder</h1>
    //       </div>
    //       <div class="league-selector">
    //         <div class="form-group">
    //           <label for="league">Select League</label>
    //           <div class="select-container">
    //             <i class="fa fa-flag select-icon"></i>
    //             <select name="league" id="league" ng-model="selected.league" ng-options="league.caption for league in leagues" ng-change="updateTeam()"></select>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="team-selector">
    //         <div class="form-group">
    //           <label for="team">Select Team</label>
    //           <div class="select-container">
    //             <img class="select-icon" ng-src="{{ selected.team.crestUrl }}" ng-show="selected.team != null" />
    //             <select name="team" id="team" ng-model="selected.team" ng-options="team.name for team in teams| orderBy:'name'" ng-change="updatePlayers()">
    //               <option value="" disabled>Select a Team</option>
    //             </select>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="player-selector">
    //         <div class="form-group">
    //           <label for="team">Select Players</label>
    //           <div class="players">
    //             <div class="player" ng-repeat="player in players" data-drag="true" jqyoui-draggable="{index: $index}" data-jqyoui-options="{revert: 'invalid'}" ng-hide="squad.gk.name === player.name" ng-model="players">
    //               <span class="player-no">{{ player.jerseyNumber }}</span> {{ player.name }}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </aside>
    //     <main class="team-container">
    //       <div class="worth">
    //         <h1>Football Squad Builder</h1>
    //       </div>
    //       <div class="row" ng-repeat="(key, value) in squad">
    //         <div class="position" data-drop="true" ng-repeat="p in squad[key]" ng-model="squad[key][$index]" jqyoui-droppable="{index: 0, onDrop:'playerDropped(squad[key][$index])'}">
    //           <div class="title">{{ p.name || p.label }}</div>
    //           <div class="subtitle">{{ p.teamName }}</div>
    //           <img ng-src="{{ p.image }}" alt="{{p.name}}" ng-show="p.image != null" class="image" />
    //         </div>
    //       </div>
    //       <div class="worth" ng-show="worth != null">
    //         <h1>Squad Value: {{(worth | currency:"€":0)}}</h1>
    //       </div>
    //     </main>
    //   </div>
    // </body>
  )
}

export default PitchTest
