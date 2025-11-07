#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 9, std140) uniform _fp_c8
{
    precise vec4 data[4096];
} fp_c8;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 8, std140) uniform _fp_c7
{
    precise vec4 data[4096];
} fp_c7;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_2C;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform sampler2D fp_t_tcb_2E;
layout (binding = 3) uniform sampler2D fp_t_tcb_24;
layout (binding = 4) uniform sampler2D fp_t_tcb_22;
layout (binding = 5) uniform sampler2D fp_t_tcb_36;
layout (binding = 6) uniform sampler2D fp_t_tcb_28;
layout (binding = 7) uniform sampler2D fp_t_tcb_20;
layout (binding = 8) uniform samplerCube fp_t_tcb_16;
layout (binding = 9) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 10) uniform samplerCube fp_t_tcb_18;
layout (binding = 11) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise vec4 temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec2 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise vec2 temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise vec4 temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise vec4 temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise vec3 temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise vec3 temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise vec3 temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    bool temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    precise float temp_213;
    precise float temp_214;
    precise float temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    uint temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    int temp_290;
    precise float temp_291;
    int temp_292;
    uint temp_293;
    uint temp_294;
    int temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    precise float temp_339;
    precise float temp_340;
    precise float temp_341;
    precise float temp_342;
    precise float temp_343;
    precise float temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    precise float temp_353;
    precise float temp_354;
    precise float temp_355;
    precise float temp_356;
    bool temp_357;
    precise float temp_358;
    precise float temp_359;
    precise float temp_360;
    precise float temp_361;
    precise float temp_362;
    precise float temp_363;
    precise float temp_364;
    precise float temp_365;
    precise float temp_366;
    precise float temp_367;
    precise float temp_368;
    precise float temp_369;
    precise float temp_370;
    precise float temp_371;
    precise float temp_372;
    precise float temp_373;
    precise float temp_374;
    precise float temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    precise float temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    int temp_405;
    bool temp_406;
    int temp_407;
    int temp_408;
    int temp_409;
    int temp_410;
    uint temp_411;
    uint temp_412;
    int temp_413;
    precise float temp_414;
    int temp_415;
    int temp_416;
    uint temp_417;
    uint temp_418;
    int temp_419;
    precise float temp_420;
    int temp_421;
    uint temp_422;
    int temp_423;
    precise float temp_424;
    int temp_425;
    uint temp_426;
    uint temp_427;
    int temp_428;
    precise float temp_429;
    int temp_430;
    uint temp_431;
    int temp_432;
    precise float temp_433;
    int temp_434;
    uint temp_435;
    uint temp_436;
    int temp_437;
    precise float temp_438;
    int temp_439;
    uint temp_440;
    int temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    precise float temp_447;
    precise float temp_448;
    precise float temp_449;
    precise float temp_450;
    precise float temp_451;
    precise float temp_452;
    precise float temp_453;
    precise float temp_454;
    precise float temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    precise float temp_459;
    precise float temp_460;
    int temp_461;
    uint temp_462;
    uint temp_463;
    int temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    precise float temp_469;
    int temp_470;
    uint temp_471;
    uint temp_472;
    int temp_473;
    precise float temp_474;
    int temp_475;
    uint temp_476;
    int temp_477;
    precise float temp_478;
    precise float temp_479;
    precise float temp_480;
    precise float temp_481;
    precise float temp_482;
    precise float temp_483;
    int temp_484;
    uint temp_485;
    uint temp_486;
    int temp_487;
    precise float temp_488;
    int temp_489;
    uint temp_490;
    int temp_491;
    precise float temp_492;
    precise float temp_493;
    precise float temp_494;
    precise float temp_495;
    precise float temp_496;
    precise float temp_497;
    precise float temp_498;
    precise float temp_499;
    precise float temp_500;
    precise float temp_501;
    precise float temp_502;
    precise float temp_503;
    uint temp_504;
    int temp_505;
    bool temp_506;
    uint temp_507;
    precise float temp_508;
    precise float temp_509;
    precise float temp_510;
    precise float temp_511;
    precise float temp_512;
    precise float temp_513;
    precise float temp_514;
    uint temp_515;
    precise float temp_516;
    bool temp_517;
    precise float temp_518;
    precise float temp_519;
    precise float temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise float temp_527;
    precise float temp_528;
    precise float temp_529;
    precise float temp_530;
    precise float temp_531;
    precise float temp_532;
    precise float temp_533;
    precise float temp_534;
    precise float temp_535;
    precise float temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    int temp_547;
    uint temp_548;
    uint temp_549;
    int temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise float temp_555;
    precise float temp_556;
    precise float temp_557;
    precise float temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise float temp_569;
    int temp_570;
    uint temp_571;
    uint temp_572;
    int temp_573;
    precise float temp_574;
    precise float temp_575;
    precise float temp_576;
    precise float temp_577;
    precise float temp_578;
    precise float temp_579;
    precise float temp_580;
    precise float temp_581;
    precise float temp_582;
    precise float temp_583;
    precise float temp_584;
    precise float temp_585;
    precise float temp_586;
    precise float temp_587;
    precise float temp_588;
    precise float temp_589;
    uint temp_590;
    uint temp_591;
    int temp_592;
    precise float temp_593;
    int temp_594;
    uint temp_595;
    int temp_596;
    precise float temp_597;
    precise float temp_598;
    precise float temp_599;
    precise float temp_600;
    precise float temp_601;
    precise float temp_602;
    precise float temp_603;
    precise float temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise float temp_608;
    precise float temp_609;
    precise float temp_610;
    precise float temp_611;
    precise float temp_612;
    precise float temp_613;
    precise float temp_614;
    precise float temp_615;
    precise float temp_616;
    precise float temp_617;
    precise float temp_618;
    precise float temp_619;
    precise float temp_620;
    precise float temp_621;
    precise float temp_622;
    precise float temp_623;
    precise float temp_624;
    precise float temp_625;
    precise float temp_626;
    precise float temp_627;
    precise float temp_628;
    int temp_629;
    precise float temp_630;
    precise float temp_631;
    precise float temp_632;
    precise float temp_633;
    precise float temp_634;
    precise float temp_635;
    precise float temp_636;
    precise float temp_637;
    precise float temp_638;
    precise float temp_639;
    precise float temp_640;
    precise float temp_641;
    precise float temp_642;
    precise float temp_643;
    precise float temp_644;
    precise float temp_645;
    precise float temp_646;
    precise float temp_647;
    precise float temp_648;
    precise vec3 temp_649;
    precise float temp_650;
    precise float temp_651;
    precise float temp_652;
    precise float temp_653;
    precise float temp_654;
    precise float temp_655;
    precise float temp_656;
    precise float temp_657;
    precise float temp_658;
    precise float temp_659;
    precise vec3 temp_660;
    precise float temp_661;
    precise float temp_662;
    precise float temp_663;
    precise vec3 temp_664;
    precise float temp_665;
    precise float temp_666;
    precise float temp_667;
    precise float temp_668;
    precise float temp_669;
    precise float temp_670;
    precise float temp_671;
    precise float temp_672;
    precise float temp_673;
    precise float temp_674;
    precise float temp_675;
    precise float temp_676;
    precise float temp_677;
    precise float temp_678;
    precise float temp_679;
    precise float temp_680;
    precise float temp_681;
    precise float temp_682;
    precise float temp_683;
    precise float temp_684;
    precise float temp_685;
    precise float temp_686;
    precise float temp_687;
    precise float temp_688;
    precise float temp_689;
    precise float temp_690;
    precise float temp_691;
    precise float temp_692;
    precise float temp_693;
    precise float temp_694;
    precise float temp_695;
    precise float temp_696;
    precise float temp_697;
    precise float temp_698;
    precise float temp_699;
    precise float temp_700;
    precise float temp_701;
    precise float temp_702;
    precise float temp_703;
    precise float temp_704;
    precise float temp_705;
    precise float temp_706;
    precise float temp_707;
    precise float temp_708;
    precise float temp_709;
    precise float temp_710;
    precise float temp_711;
    precise float temp_712;
    precise float temp_713;
    precise float temp_714;
    precise float temp_715;
    precise float temp_716;
    precise float temp_717;
    precise float temp_718;
    precise float temp_719;
    precise float temp_720;
    precise float temp_721;
    precise float temp_722;
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    precise float temp_726;
    precise float temp_727;
    precise float temp_728;
    precise float temp_729;
    precise float temp_730;
    precise float temp_731;
    precise float temp_732;
    precise float temp_733;
    precise float temp_734;
    precise float temp_735;
    precise float temp_736;
    precise float temp_737;
    precise float temp_738;
    precise float temp_739;
    precise float temp_740;
    precise float temp_741;
    precise float temp_742;
    precise float temp_743;
    precise float temp_744;
    precise float temp_745;
    precise float temp_746;
    precise float temp_747;
    precise float temp_748;
    precise float temp_749;
    precise float temp_750;
    precise float temp_751;
    precise float temp_752;
    precise float temp_753;
    precise float temp_754;
    precise float temp_755;
    precise float temp_756;
    precise float temp_757;
    precise float temp_758;
    precise float temp_759;
    precise float temp_760;
    precise float temp_761;
    precise float temp_762;
    precise float temp_763;
    precise float temp_764;
    precise float temp_765;
    precise float temp_766;
    precise float temp_767;
    precise float temp_768;
    precise float temp_769;
    precise float temp_770;
    precise float temp_771;
    precise float temp_772;
    precise float temp_773;
    precise float temp_774;
    precise float temp_775;
    precise float temp_776;
    precise float temp_777;
    precise float temp_778;
    precise float temp_779;
    precise float temp_780;
    precise float temp_781;
    precise float temp_782;
    precise float temp_783;
    precise float temp_784;
    precise float temp_785;
    precise float temp_786;
    precise float temp_787;
    precise float temp_788;
    precise float temp_789;
    precise float temp_790;
    precise float temp_791;
    precise float temp_792;
    precise float temp_793;
    precise float temp_794;
    precise float temp_795;
    precise float temp_796;
    precise float temp_797;
    precise float temp_798;
    precise float temp_799;
    precise float temp_800;
    precise float temp_801;
    precise float temp_802;
    precise float temp_803;
    precise float temp_804;
    precise float temp_805;
    precise float temp_806;
    precise float temp_807;
    precise float temp_808;
    precise float temp_809;
    precise float temp_810;
    precise float temp_811;
    precise float temp_812;
    precise float temp_813;
    precise float temp_814;
    precise float temp_815;
    precise float temp_816;
    precise float temp_817;
    precise float temp_818;
    precise float temp_819;
    precise float temp_820;
    precise float temp_821;
    precise float temp_822;
    precise float temp_823;
    precise float temp_824;
    precise float temp_825;
    precise float temp_826;
    precise float temp_827;
    precise float temp_828;
    precise float temp_829;
    precise float temp_830;
    precise float temp_831;
    precise float temp_832;
    precise float temp_833;
    precise float temp_834;
    precise float temp_835;
    precise float temp_836;
    precise float temp_837;
    precise float temp_838;
    precise float temp_839;
    precise float temp_840;
    precise float temp_841;
    precise float temp_842;
    precise float temp_843;
    precise float temp_844;
    precise float temp_845;
    precise float temp_846;
    precise float temp_847;
    // 0x000008: 0x4C9807940397001D Mov
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8EC107FF0B Ipa
    temp_0 = in_attr6.w;
    // 0x000030: 0xE043FF8E8107FF0A Ipa
    temp_1 = in_attr6.z;
    // 0x000038: 0xE043FF8E0107FF0D Ipa
    temp_2 = in_attr6.x;
    // 0x000048: 0xE043FF8E4107FF13 Ipa
    temp_3 = in_attr6.y;
    // 0x000050: 0xD83002C080B70A04 Texs
    temp_4 = texture(fp_t_tcb_2C, vec2(temp_1, temp_0)).xyzw;
    temp_5 = temp_4.x;
    temp_6 = temp_4.y;
    temp_7 = temp_4.z;
    temp_8 = temp_4.w;
    // 0x000058: 0xD830026FF1370D00 Texs
    temp_9 = texture(fp_t_tcb_26, vec2(temp_2, temp_3)).xy;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    // 0x000068: 0xD83002EFF0B70A02 Texs
    temp_12 = texture(fp_t_tcb_2E, vec2(temp_1, temp_0)).xy;
    temp_13 = temp_12.x;
    temp_14 = temp_12.y;
    // 0x000070: 0xE043FF8A0107FF06 Ipa
    temp_15 = in_attr2.x;
    // 0x000078: 0xE043FF890107FF0F Ipa
    temp_16 = in_attr1.x;
    // 0x000088: 0xE043FF8A4107FF07 Ipa
    temp_17 = in_attr2.y;
    // 0x000090: 0xE043FF894107FF12 Ipa
    temp_18 = in_attr1.y;
    // 0x000098: 0xE043FF8A8107FF0C Ipa
    temp_19 = in_attr2.z;
    // 0x0000A8: 0xE043FF898107FF15 Ipa
    temp_20 = in_attr1.z;
    // 0x0000B0: 0xE043FF880107FF17 Ipa
    temp_21 = in_attr0.x;
    // 0x0000B8: 0xE043FF884107FF1A Ipa
    temp_22 = in_attr0.y;
    // 0x0000C8: 0xE043FF888107FF1B Ipa
    temp_23 = in_attr0.z;
    // 0x0000D0: 0x5C6810000067060E Fmul
    temp_24 = temp_15 * temp_15;
    // 0x0000D8: 0x5C68100000F70F11 Fmul
    temp_25 = temp_16 * temp_16;
    // 0x0000E8: 0x59A007000077070E Ffma
    temp_26 = fma(temp_17, temp_17, temp_24);
    // 0x0000F0: 0x59A0088001271214 Ffma
    temp_27 = fma(temp_18, temp_18, temp_25);
    // 0x0000F8: 0x59A0070000C70C0E Ffma
    temp_28 = fma(temp_19, temp_19, temp_26);
    // 0x000108: 0x59A00A0001571516 Ffma
    temp_29 = fma(temp_20, temp_20, temp_27);
    // 0x000110: 0x5080000000570E11 Mufu
    temp_30 = inversesqrt(temp_28);
    // 0x000118: 0x5080000000571618 Mufu
    temp_31 = inversesqrt(temp_29);
    // 0x000128: 0xE003FF870FF7FF0E Ipa
    temp_32 = gl_FragCoord.x;
    temp_33 = support_buffer.render_scale[0];
    temp_34 = temp_32 / temp_33;
    // 0x000130: 0x5C68100001170714 Fmul
    temp_35 = temp_17 * temp_30;
    // 0x000138: 0x5C68100001170606 Fmul
    temp_36 = temp_15 * temp_30;
    // 0x000148: 0x5C68100001871219 Fmul
    temp_37 = temp_18 * temp_31;
    // 0x000150: 0x5C68100001170C0C Fmul
    temp_38 = temp_19 * temp_30;
    // 0x000158: 0x5C68100001870F11 Fmul
    temp_39 = temp_16 * temp_31;
    // 0x000168: 0x5C6810000177170F Fmul
    temp_40 = temp_21 * temp_21;
    // 0x000170: 0x5C68100001871515 Fmul
    temp_41 = temp_20 * temp_31;
    // 0x000178: 0x4C68100C04A70E0E Fmul
    temp_42 = temp_34 * fp_c3.data[18].z;
    // 0x000188: 0x5C68100000970412 Fmul
    temp_43 = temp_5 * temp_8;
    // 0x000190: 0x5C59100000370107 Fadd
    temp_44 = 0.0 - temp_11;
    temp_45 = temp_44 + temp_14;
    // 0x000198: 0x5C59100000270003 Fadd
    temp_46 = 0.0 - temp_10;
    temp_47 = temp_46 + temp_13;
    // 0x0001A8: 0x59A0008001270707 Ffma
    temp_48 = fma(temp_45, temp_43, temp_11);
    // 0x0001B0: 0x59A0000001270303 Ffma
    temp_49 = fma(temp_47, temp_43, temp_10);
    // 0x0001B8: 0x59A0078001A71A01 Ffma
    temp_50 = fma(temp_22, temp_22, temp_40);
    // 0x0001C8: 0x5C68100000770700 Fmul
    temp_51 = temp_48 * temp_48;
    // 0x0001D0: 0x5C68100000670706 Fmul
    temp_52 = temp_48 * temp_36;
    // 0x0001D8: 0x59A0008001B71B01 Ffma
    temp_53 = fma(temp_23, temp_23, temp_50);
    // 0x0001E8: 0x5C68100001470714 Fmul
    temp_54 = temp_48 * temp_35;
    // 0x0001F0: 0x5080000000570101 Mufu
    temp_55 = inversesqrt(temp_53);
    // 0x0001F8: 0x5C68100000C7070C Fmul
    temp_56 = temp_48 * temp_38;
    // 0x000208: 0x59A0000000370300 Ffma
    temp_57 = fma(temp_49, temp_49, temp_51);
    // 0x000210: 0x59A0030001170306 Ffma
    temp_58 = fma(temp_49, temp_39, temp_52);
    // 0x000218: 0x59A00A0001970314 Ffma
    temp_59 = fma(temp_49, temp_37, temp_54);
    // 0x000228: 0x59A006000157030C Ffma
    temp_60 = fma(temp_49, temp_41, temp_56);
    // 0x000230: 0x385D103F80070000 Fadd
    temp_61 = 0.0 - temp_57;
    temp_62 = temp_61 + 1.0;
    temp_63 = clamp(temp_62, 0.0, 1.0);
    // 0x000238: 0x508000000087000F Mufu
    temp_64 = sqrt(temp_63);
    // 0x000248: 0x5C68100000171711 Fmul
    temp_65 = temp_21 * temp_55;
    // 0x000250: 0x5C68100000171A1A Fmul
    temp_66 = temp_22 * temp_55;
    // 0x000258: 0x5C68100000171B02 Fmul
    temp_67 = temp_23 * temp_55;
    // 0x000268: 0x59A0030001170F06 Ffma
    temp_68 = fma(temp_64, temp_65, temp_58);
    // 0x000270: 0x59A00A0001A70F14 Ffma
    temp_69 = fma(temp_64, temp_66, temp_59);
    // 0x000278: 0x59A0060000270F02 Ffma
    temp_70 = fma(temp_64, temp_67, temp_60);
    // 0x000288: 0xE003FF874FF7FF0C Ipa
    temp_71 = gl_FragCoord.y;
    temp_72 = support_buffer.render_scale[0];
    temp_73 = temp_71 / temp_72;
    // 0x000290: 0x5C68100000670601 Fmul
    temp_74 = temp_68 * temp_68;
    // 0x000298: 0x59A0008001471401 Ffma
    temp_75 = fma(temp_69, temp_69, temp_74);
    // 0x0002A8: 0x59A0008000270201 Ffma
    temp_76 = fma(temp_70, temp_70, temp_75);
    // 0x0002B0: 0x5080000000570101 Mufu
    temp_77 = inversesqrt(temp_76);
    // 0x0002B8: 0x4C68100C04B70C0C Fmul
    temp_78 = temp_73 * fp_c3.data[18].w;
    // 0x0002C8: 0x5C68100000170233 Fmul
    temp_79 = temp_70 * temp_77;
    // 0x0002D0: 0x5C68100000171400 Fmul
    temp_80 = temp_69 * temp_77;
    // 0x0002D8: 0x5C6810000017062A Fmul
    temp_81 = temp_68 * temp_77;
    // 0x0002E8: 0x4C68100C00673303 Fmul
    temp_82 = temp_79 * fp_c3.data[1].z;
    // 0x0002F0: 0x4C68100C00273302 Fmul
    temp_83 = temp_79 * fp_c3.data[0].z;
    // 0x0002F8: 0x49A0018C00570007 Ffma
    temp_84 = fma(temp_80, fp_c3.data[1].y, temp_82);
    // 0x000308: 0x49A0010C00170003 Ffma
    temp_85 = fma(temp_80, fp_c3.data[0].y, temp_83);
    // 0x000310: 0x49A0038C00472A07 Ffma
    temp_86 = fma(temp_81, fp_c3.data[1].x, temp_84);
    // 0x000318: 0x49A0018C00072A03 Ffma
    temp_87 = fma(temp_81, fp_c3.data[0].x, temp_85);
    // 0x000328: 0x4C69100C03E70707 Fmul
    temp_88 = 0.0 - fp_c3.data[15].z;
    temp_89 = temp_86 * temp_88;
    // 0x000330: 0x4C68101808B70303 Fmul
    temp_90 = temp_87 * fp_c6.data[34].w;
    // 0x000338: 0x4C68101808B70707 Fmul
    temp_91 = temp_89 * fp_c6.data[34].w;
    // 0x000348: 0x49A0070400370322 Ffma
    temp_92 = fma(temp_90, fp_c1.data[0].w, temp_42);
    // 0x000350: 0x49A0060400370723 Ffma
    temp_93 = fma(temp_91, fp_c1.data[0].w, temp_78);
    // 0x000358: 0xD830024021370D06 Texs
    temp_94 = texture(fp_t_tcb_24, vec2(temp_2, temp_3)).xyzw;
    temp_95 = temp_94.x;
    temp_96 = temp_94.y;
    temp_97 = temp_94.z;
    temp_98 = temp_94.w;
    // 0x000368: 0xD832022242372222 Texs
    temp_99 = texture(fp_t_tcb_22, vec2(temp_92, temp_93)).xyzw;
    temp_100 = temp_99.x;
    temp_101 = temp_99.y;
    temp_102 = temp_99.z;
    temp_103 = temp_99.w;
    // 0x000370: 0xD824036111370D28 Texs
    temp_104 = texture(fp_t_tcb_36, vec2(temp_2, temp_3)).xyw;
    temp_105 = temp_104.x;
    temp_106 = temp_104.y;
    temp_107 = temp_104.z;
    // 0x000378: 0xD8220280F0B70A0A Texs
    temp_108 = texture(fp_t_tcb_28, vec2(temp_1, temp_0)).xyz;
    temp_109 = temp_108.x;
    temp_110 = temp_108.y;
    temp_111 = temp_108.z;
    // 0x000388: 0xD822020010C70E26 Texs
    temp_112 = texture(fp_t_tcb_20, vec2(temp_42, temp_78)).xyz;
    temp_113 = temp_112.x;
    temp_114 = temp_112.y;
    temp_115 = temp_112.z;
    // 0x000390: 0xE043FF8B0107FF37 Ipa
    temp_116 = in_attr3.x;
    // 0x000398: 0xE043FF8B4107FF35 Ipa
    temp_117 = in_attr3.y;
    // 0x0003A8: 0xE043FF8B8107FF34 Ipa
    temp_118 = in_attr3.z;
    // 0x0003B0: 0x4C98079C23270017 Mov
    // 0x0003B8: 0x4C98079403D70018 Mov
    // 0x0003C8: 0x4C98079403E70019 Mov
    // 0x0003D0: 0x5C68100003773714 Fmul
    temp_119 = temp_116 * temp_116;
    // 0x0003D8: 0x59A00A0003573515 Ffma
    temp_120 = fma(temp_117, temp_117, temp_119);
    // 0x0003E8: 0x59A00A8003473415 Ffma
    temp_121 = fma(temp_118, temp_118, temp_120);
    // 0x0003F0: 0x508000000057151A Mufu
    temp_122 = inversesqrt(temp_121);
    // 0x0003F8: 0x4C5C10140637170D Fadd
    temp_123 = fp_c7.data[140].z + fp_c5.data[24].w;
    temp_124 = clamp(temp_123, 0.0, 1.0);
    // 0x000408: 0x5C69100001A73737 Fmul
    temp_125 = 0.0 - temp_122;
    temp_126 = temp_116 * temp_125;
    // 0x000410: 0x5C69100001A73535 Fmul
    temp_127 = 0.0 - temp_122;
    temp_128 = temp_117 * temp_127;
    // 0x000418: 0x5C69100001A73434 Fmul
    temp_129 = 0.0 - temp_122;
    temp_130 = temp_118 * temp_129;
    // 0x000428: 0xF0F0000034470000 Depbar
    // 0x000430: 0x4C68101402D70716 Fmul
    temp_131 = temp_96 * fp_c5.data[11].y;
    // 0x000438: 0x4C68101402E70214 Fmul
    temp_132 = temp_97 * fp_c5.data[11].z;
    // 0x000448: 0x4C68101402C70613 Fmul
    temp_133 = temp_95 * fp_c5.data[11].x;
    // 0x000450: 0x4BB1839406070307 Fsetp
    temp_134 = temp_98 < fp_c5.data[24].x;
    // 0x000458: 0x51A10C1403570715 Ffma
    temp_135 = 0.0 - fp_c5.data[15].y;
    temp_136 = fma(temp_96, temp_135, fp_c5.data[13].y);
    // 0x000468: 0x51A10E940357071D Ffma
    temp_137 = 0.0 - fp_c5.data[14].y;
    temp_138 = fma(temp_96, temp_137, fp_c5.data[13].y);
    // 0x000470: 0x49A20B1403170717 Ffma
    temp_139 = 0.0 - temp_131;
    temp_140 = fma(temp_96, fp_c5.data[12].y, temp_139);
    // 0x000478: 0x49A20A140327021A Ffma
    temp_141 = 0.0 - temp_132;
    temp_142 = fma(temp_97, fp_c5.data[12].z, temp_141);
    // 0x000488: 0x49A2099403070618 Ffma
    temp_143 = 0.0 - temp_133;
    temp_144 = fma(temp_95, fp_c5.data[12].x, temp_143);
    // 0x000490: 0x51A10C9403670219 Ffma
    temp_145 = 0.0 - fp_c5.data[15].z;
    temp_146 = fma(temp_97, temp_145, fp_c5.data[13].z);
    // 0x000498: 0x4C6810140397071B Fmul
    temp_147 = temp_96 * fp_c5.data[14].y;
    // 0x0004A8: 0x51A002940667071C Ffma
    temp_148 = fma(temp_96, temp_6, fp_c5.data[25].z);
    // 0x0004B0: 0x59A00B0000D71716 Ffma
    temp_149 = fma(temp_140, temp_124, temp_131);
    // 0x0004B8: 0x59A00A0000D71A14 Ffma
    temp_150 = fma(temp_142, temp_124, temp_132);
    // 0x0004C8: 0x4C68101403D70717 Fmul
    temp_151 = temp_96 * fp_c5.data[15].y;
    // 0x0004D0: 0x4C68101403E7021A Fmul
    temp_152 = temp_97 * fp_c5.data[15].z;
    // 0x0004D8: 0x59A0098000D71813 Ffma
    temp_153 = fma(temp_144, temp_124, temp_133);
    // 0x0004E8: 0x59A00D8001D70418 Ffma
    temp_154 = fma(temp_5, temp_138, temp_147);
    // 0x0004F0: 0x4C98079403A70007 Mov
    // 0x0004F8: 0x4C98079403C70005 Mov
    // 0x000508: 0x59A00B8001570415 Ffma
    temp_155 = fma(temp_5, temp_136, temp_151);
    // 0x000510: 0x59A00D0001970419 Ffma
    temp_156 = fma(temp_5, temp_146, temp_152);
    // 0x000518: 0xE24000000708000F Bra
    if (temp_134)
    {
        // 0x000528: 0x5C9807800FF70000 Mov
        // 0x000530: 0xE33000000007000F Kil
        discard;
    }
    // 0x000590: 0x4C58301805C73717 Fadd
    temp_157 = 0.0 - fp_c6.data[23].x;
    temp_158 = temp_126 + temp_157;
    // 0x000598: 0xE2900000D8000000 Ssy
    // 0x0005A8: 0x51A004140667021B Ffma
    temp_159 = fma(temp_97, temp_7, fp_c5.data[25].z);
    // 0x0005B0: 0x4C58301805D73508 Fadd
    temp_160 = 0.0 - fp_c6.data[23].y;
    temp_161 = temp_128 + temp_160;
    // 0x0005B8: 0x51A103940367021E Ffma
    temp_162 = 0.0 - fp_c5.data[14].z;
    temp_163 = fma(temp_97, temp_162, fp_c5.data[13].z);
    // 0x0005C8: 0x4C68101403A7021D Fmul
    temp_164 = temp_97 * fp_c5.data[14].z;
    // 0x0005D0: 0x4C9807940387001F Mov
    // 0x0005D8: 0x5C68100001771721 Fmul
    temp_165 = temp_158 * temp_158;
    // 0x0005E8: 0x51A1029403470602 Ffma
    temp_166 = 0.0 - fp_c5.data[15].x;
    temp_167 = fma(temp_95, temp_166, fp_c5.data[13].x);
    // 0x0005F0: 0x4C58301805E73405 Fadd
    temp_168 = 0.0 - fp_c6.data[23].z;
    temp_169 = temp_130 + temp_168;
    // 0x0005F8: 0x4C68101403C70607 Fmul
    temp_170 = temp_95 * fp_c5.data[15].x;
    // 0x000608: 0x59A00E8001E7041E Ffma
    temp_171 = fma(temp_5, temp_163, temp_164);
    // 0x000610: 0x51A10F940347061F Ffma
    temp_172 = 0.0 - fp_c5.data[14].x;
    temp_173 = fma(temp_95, temp_172, fp_c5.data[13].x);
    // 0x000618: 0x59A0108000870820 Ffma
    temp_174 = fma(temp_161, temp_161, temp_165);
    // 0x000628: 0x4C6810140387061A Fmul
    temp_175 = temp_95 * fp_c5.data[14].x;
    // 0x000630: 0x51A002140667061D Ffma
    temp_176 = fma(temp_95, temp_5, fp_c5.data[25].z);
    // 0x000638: 0x59A1090001271C21 Ffma
    temp_177 = 0.0 - temp_43;
    temp_178 = fma(temp_148, temp_177, temp_43);
    // 0x000648: 0x59A0038000270402 Ffma
    temp_179 = fma(temp_5, temp_167, temp_170);
    // 0x000650: 0xF0F0000034270000 Depbar
    // 0x000658: 0x4C6810180A072828 Fmul
    temp_180 = temp_105 * fp_c6.data[40].x;
    // 0x000668: 0x59A0100000570506 Ffma
    temp_181 = fma(temp_169, temp_169, temp_174);
    // 0x000670: 0x59A00D0001F70404 Ffma
    temp_182 = fma(temp_5, temp_173, temp_175);
    // 0x000678: 0x5080000000570606 Mufu
    temp_183 = inversesqrt(temp_181);
    // 0x000688: 0x5C58100002171C07 Fadd
    temp_184 = temp_148 + temp_178;
    // 0x000690: 0x5C58300001E7191C Fadd
    temp_185 = 0.0 - temp_171;
    temp_186 = temp_156 + temp_185;
    // 0x000698: 0x4C98079C23070021 Mov
    // 0x0006A8: 0x5C5830000187151A Fadd
    temp_187 = 0.0 - temp_154;
    temp_188 = temp_155 + temp_187;
    // 0x0006B0: 0x59A1090001271B20 Ffma
    temp_189 = 0.0 - temp_43;
    temp_190 = fma(temp_159, temp_189, temp_43);
    // 0x0006B8: 0x386013BF80072828 Fmnmx
    temp_191 = min(temp_180, 1.0);
    // 0x0006C8: 0x59A1090001271D1F Ffma
    temp_192 = 0.0 - temp_43;
    temp_193 = fma(temp_176, temp_192, temp_43);
    // 0x0006D0: 0x59A00F0000D71C1E Ffma
    temp_194 = fma(temp_186, temp_124, temp_171);
    // 0x0006D8: 0x4C68101406472119 Fmul
    temp_195 = fp_c7.data[140].x * fp_c5.data[25].x;
    // 0x0006E8: 0x59A00C0000D71A18 Ffma
    temp_196 = fma(temp_188, temp_124, temp_154);
    // 0x0006F0: 0x5C58100002071B15 Fadd
    temp_197 = temp_159 + temp_190;
    // 0x0006F8: 0x0103F0000007F020 Mov32i
    // 0x000708: 0x5C6810000067171C Fmul
    temp_198 = temp_158 * temp_183;
    // 0x000710: 0x5C58300000470217 Fadd
    temp_199 = 0.0 - temp_182;
    temp_200 = temp_179 + temp_199;
    // 0x000718: 0x1E23C8EFA3571919 Fmul32i
    temp_201 = temp_195 * 0.0174532924;
    // 0x000728: 0x5C5910000187161B Fadd
    temp_202 = 0.0 - temp_149;
    temp_203 = temp_202 + temp_196;
    // 0x000730: 0x5C6810000067081A Fmul
    temp_204 = temp_161 * temp_183;
    // 0x000738: 0x4C60178400072802 Fmnmx
    temp_205 = max(temp_191, fp_c1.data[0].x);
    // 0x000748: 0x5C68100001C73708 Fmul
    temp_206 = temp_126 * temp_198;
    // 0x000750: 0x59A0020000D71718 Ffma
    temp_207 = fma(temp_200, temp_124, temp_182);
    // 0x000758: 0x5C68100001C72A17 Fmul
    temp_208 = temp_81 * temp_198;
    // 0x000768: 0x5C58100001F71D12 Fadd
    temp_209 = temp_176 + temp_193;
    // 0x000770: 0x59A00B0001B70904 Ffma
    temp_210 = fma(temp_8, temp_203, temp_149);
    // 0x000778: 0x5C9000000197001F Rro
    // 0x000788: 0x5C68100000670519 Fmul
    temp_211 = temp_169 * temp_183;
    // 0x000790: 0x59A0040001A7351B Ffma
    temp_212 = fma(temp_128, temp_204, temp_206);
    // 0x000798: 0x51A4010400070216 Ffma
    temp_213 = fma(temp_205, temp_205, fp_c1.data[0].x);
    temp_214 = clamp(temp_213, 0.0, 1.0);
    // 0x0007A8: 0x59A00B8001A70006 Ffma
    temp_215 = fma(temp_80, temp_204, temp_208);
    // 0x0007B0: 0x5080000000171F17 Mufu
    temp_216 = sin(temp_201);
    // 0x0007B8: 0x4C69101805C71C05 Fmul
    temp_217 = 0.0 - fp_c6.data[23].x;
    temp_218 = temp_198 * temp_217;
    // 0x0007C8: 0x5C59100001E7141E Fadd
    temp_219 = 0.0 - temp_150;
    temp_220 = temp_219 + temp_194;
    // 0x0007D0: 0x01040DF760C7F008 Mov32i
    // 0x0007D8: 0x59A40D800197341D Ffma
    temp_221 = fma(temp_130, temp_211, temp_212);
    temp_222 = clamp(temp_221, 0.0, 1.0);
    // 0x0007E8: 0x5C6810000167161C Fmul
    temp_223 = temp_214 * temp_214;
    // 0x0007F0: 0x59A403000197331B Ffma
    temp_224 = fma(temp_79, temp_211, temp_215);
    temp_225 = clamp(temp_224, 0.0, 1.0);
    // 0x0007F8: 0x5C59100001871306 Fadd
    temp_226 = 0.0 - temp_153;
    temp_227 = temp_226 + temp_207;
    // 0x000808: 0x49A1029805D71A1A Ffma
    temp_228 = 0.0 - fp_c6.data[23].y;
    temp_229 = fma(temp_204, temp_228, temp_218);
    // 0x000810: 0x59A00A0001E70905 Ffma
    temp_230 = fma(temp_8, temp_220, temp_150);
    // 0x000818: 0x3868104110070C1E Fmul
    temp_231 = temp_78 * 9.0;
    // 0x000828: 0x49A2040400271D18 Ffma
    temp_232 = fma(temp_222, fp_c1.data[0].z, -6.98316002);
    // 0x000830: 0x5CA8148001E70A1E F2f
    temp_233 = floor(temp_231);
    // 0x000838: 0x59A20D8001C71B1C Ffma
    temp_234 = 0.0 - temp_225;
    temp_235 = fma(temp_225, temp_223, temp_234);
    // 0x000848: 0x59A0098000670906 Ffma
    temp_236 = fma(temp_8, temp_227, temp_153);
    // 0x000850: 0x51A0101406571709 Ffma
    temp_237 = fma(temp_216, 0.5, fp_c5.data[25].y);
    // 0x000858: 0x5C68100003772A17 Fmul
    temp_238 = temp_81 * temp_126;
    // 0x000868: 0x49A50D1805E71913 Ffma
    temp_239 = 0.0 - fp_c6.data[23].z;
    temp_240 = fma(temp_211, temp_239, temp_229);
    temp_241 = clamp(temp_240, 0.0, 1.0);
    // 0x000870: 0x32A0103F0007022B Ffma
    temp_242 = fma(temp_205, 0.5, 0.5);
    // 0x000878: 0x51A00E0400171B1C Ffma
    temp_243 = fma(temp_225, temp_235, fp_c1.data[0].y);
    // 0x000888: 0x3868104180070E1B Fmul
    temp_244 = temp_42 * 16.0;
    // 0x000890: 0x5080000000471C1C Mufu
    temp_245 = 1.0 / temp_243;
    // 0x000898: 0x3858103F00070919 Fadd
    temp_246 = temp_237 + 0.5;
    // 0x0008A8: 0x5CA8148001B70A1B F2f
    temp_247 = floor(temp_244);
    // 0x0008B0: 0x59A00B8003570009 Ffma
    temp_248 = fma(temp_80, temp_128, temp_238);
    // 0x0008B8: 0x4C69101805C72A0E Fmul
    temp_249 = 0.0 - fp_c6.data[23].x;
    temp_250 = temp_81 * temp_249;
    // 0x0008C8: 0x5C68100001871D1D Fmul
    temp_251 = temp_222 * temp_232;
    // 0x0008D0: 0x5C68120002B72B2B Fmul
    temp_252 = temp_242 * 0.5;
    temp_253 = temp_252 * temp_242;
    // 0x0008D8: 0xF0F0000034170000 Depbar
    // 0x0008E8: 0x4C68101404070A14 Fmul
    temp_254 = temp_109 * fp_c5.data[16].x;
    // 0x0008F0: 0x4C68101404170B17 Fmul
    temp_255 = temp_110 * fp_c5.data[16].y;
    // 0x0008F8: 0x59A4048003473309 Ffma
    temp_256 = fma(temp_79, temp_130, temp_248);
    temp_257 = clamp(temp_256, 0.0, 1.0);
    // 0x000908: 0x4C6810140457070A Fmul
    temp_258 = temp_184 * fp_c5.data[17].y;
    // 0x000910: 0x49A1071805D70018 Ffma
    temp_259 = 0.0 - fp_c6.data[23].y;
    temp_260 = fma(temp_80, temp_259, temp_250);
    // 0x000918: 0x4C6810140467150E Fmul
    temp_261 = temp_197 * fp_c5.data[17].z;
    // 0x000928: 0x4C6810140447120B Fmul
    temp_262 = temp_209 * fp_c5.data[17].x;
    // 0x000930: 0x5C90008001D70007 Rro
    // 0x000938: 0x32A00DC180071E1E Ffma
    temp_263 = fma(temp_233, 16.0, temp_247);
    // 0x000948: 0x5080000000270707 Mufu
    temp_264 = exp2(temp_251);
    // 0x000950: 0x59A1048002B70915 Ffma
    temp_265 = 0.0 - temp_253;
    temp_266 = fma(temp_257, temp_265, temp_257);
    // 0x000958: 0x5CB0118001E70A1E F2i
    temp_267 = trunc(temp_263);
    temp_268 = max(temp_267, 0.0);
    temp_269 = uint(temp_268);
    // 0x000968: 0x59A2050001971717 Ffma
    temp_270 = 0.0 - temp_258;
    temp_271 = fma(temp_255, temp_246, temp_270);
    // 0x000970: 0x49A50C1805E73312 Ffma
    temp_272 = 0.0 - fp_c6.data[23].z;
    temp_273 = fma(temp_79, temp_272, temp_260);
    temp_274 = clamp(temp_273, 0.0, 1.0);
    // 0x000978: 0x4C58301407B70618 Fadd
    temp_275 = 0.0 - fp_c5.data[30].w;
    temp_276 = temp_236 + temp_275;
    // 0x000988: 0x5C68100001C71616 Fmul
    temp_277 = temp_214 * temp_245;
    // 0x000990: 0x4C68101404270F0F Fmul
    temp_278 = temp_111 * fp_c5.data[16].z;
    // 0x000998: 0x5C58100001572B1A Fadd
    temp_279 = temp_253 + temp_266;
    // 0x0009A8: 0x49A2040400271315 Ffma
    temp_280 = fma(temp_241, fp_c1.data[0].z, -6.98316002);
    // 0x0009B0: 0x5080000000471A1A Mufu
    temp_281 = 1.0 / temp_279;
    // 0x0009B8: 0x59A0050001770D08 Ffma
    temp_282 = fma(temp_124, temp_271, temp_258);
    // 0x0009C8: 0x51A00C1407B7290A Ffma
    temp_283 = fma(temp_106, temp_276, fp_c5.data[30].w);
    // 0x0009D0: 0x59A1090002B7121D Ffma
    temp_284 = 0.0 - temp_253;
    temp_285 = fma(temp_274, temp_284, temp_274);
    // 0x0009D8: 0x59A2058001971414 Ffma
    temp_286 = 0.0 - temp_262;
    temp_287 = fma(temp_254, temp_246, temp_286);
    // 0x0009E8: 0x59A2070001970F0C Ffma
    temp_288 = 0.0 - temp_261;
    temp_289 = fma(temp_278, temp_246, temp_288);
    // 0x0009F0: 0x3848000000871E1C Shl
    temp_290 = int(temp_269) << 8;
    // 0x0009F8: 0x5C68100001571315 Fmul
    temp_291 = temp_241 * temp_280;
    // 0x000A08: 0xEF94008200471C1C Ldc
    temp_292 = temp_290 + 0x2004;
    temp_293 = uint(temp_292) >> 2;
    temp_294 = temp_293 >> 2;
    temp_295 = int(temp_293) & 3;
    temp_296 = fp_c8.data[int(temp_294)][temp_295];
    // 0x000A10: 0x59A1038000770A0F Ffma
    temp_297 = 0.0 - temp_264;
    temp_298 = fma(temp_283, temp_297, temp_264);
    // 0x000A18: 0x5C58100001D72B1D Fadd
    temp_299 = temp_253 + temp_285;
    // 0x000A28: 0x59A0058001470D0B Ffma
    temp_300 = fma(temp_124, temp_287, temp_262);
    // 0x000A30: 0x5080000000471D1D Mufu
    temp_301 = 1.0 / temp_299;
    // 0x000A38: 0x59A0070000C70D0C Ffma
    temp_302 = fma(temp_124, temp_289, temp_261);
    // 0x000A48: 0x5C90008001570013 Rro
    // 0x000A50: 0x4C6810180147120D Fmul
    temp_303 = temp_274 * fp_c6.data[5].x;
    // 0x000A58: 0x5080000000271313 Mufu
    temp_304 = exp2(temp_291);
    // 0x000A68: 0x5C58100000F70A15 Fadd
    temp_305 = temp_283 + temp_298;
    // 0x000A70: 0x4C58301407B7040E Fadd
    temp_306 = 0.0 - fp_c5.data[30].w;
    temp_307 = temp_210 + temp_306;
    // 0x000A78: 0x4C58301407B7050F Fadd
    temp_308 = 0.0 - fp_c5.data[30].w;
    temp_309 = temp_230 + temp_308;
    // 0x000A88: 0x3868103F00071A1F Fmul
    temp_310 = temp_281 * 0.5;
    // 0x000A90: 0x5C68100001671616 Fmul
    temp_311 = temp_277 * temp_277;
    // 0x000A98: 0x1E23EA2F98370D17 Fmul32i
    temp_312 = temp_303 * 0.318309873;
    // 0x000AA8: 0x4C68101406271515 Fmul
    temp_313 = temp_305 * fp_c5.data[24].z;
    // 0x000AB0: 0x51A0071407B7290D Ffma
    temp_314 = fma(temp_106, temp_307, fp_c5.data[30].w);
    // 0x000AB8: 0x51A0079407B7290E Ffma
    temp_315 = fma(temp_106, temp_309, fp_c5.data[30].w);
    // 0x000AC8: 0x5C68100001D71F14 Fmul
    temp_316 = temp_310 * temp_301;
    // 0x000AD0: 0x4C98079808A70019 Mov
    // 0x000AD8: 0x385D103F80071111 Fadd
    temp_317 = 0.0 - temp_107;
    temp_318 = temp_317 + 1.0;
    temp_319 = clamp(temp_318, 0.0, 1.0);
    // 0x000AE8: 0x59A10B800177150F Ffma
    temp_320 = 0.0 - temp_312;
    temp_321 = fma(temp_313, temp_320, temp_312);
    // 0x000AF0: 0x59A1098001370A15 Ffma
    temp_322 = 0.0 - temp_304;
    temp_323 = fma(temp_283, temp_322, temp_304);
    // 0x000AF8: 0x59A1038000770D18 Ffma
    temp_324 = 0.0 - temp_264;
    temp_325 = fma(temp_314, temp_324, temp_264);
    // 0x000B08: 0x59A1038000770E07 Ffma
    temp_326 = 0.0 - temp_264;
    temp_327 = fma(temp_315, temp_326, temp_264);
    // 0x000B10: 0x5C68100001471614 Fmul
    temp_328 = temp_311 * temp_316;
    // 0x000B18: 0x4C68101808771919 Fmul
    temp_329 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000B28: 0x59A1098001370D16 Ffma
    temp_330 = 0.0 - temp_304;
    temp_331 = fma(temp_314, temp_330, temp_304);
    // 0x000B30: 0x5C58100001570A15 Fadd
    temp_332 = temp_283 + temp_323;
    // 0x000B38: 0x59A1098001370E13 Ffma
    temp_333 = 0.0 - temp_304;
    temp_334 = fma(temp_315, temp_333, temp_304);
    // 0x000B48: 0x5C58100000770E1A Fadd
    temp_335 = temp_315 + temp_327;
    // 0x000B50: 0x4C68101801571217 Fmul
    temp_336 = temp_274 * fp_c6.data[5].y;
    // 0x000B58: 0x51A0111801471907 Ffma
    temp_337 = fma(temp_329, temp_100, fp_c6.data[5].x);
    // 0x000B68: 0x5C58100001670D16 Fadd
    temp_338 = temp_314 + temp_331;
    // 0x000B70: 0x4C68101406271515 Fmul
    temp_339 = temp_332 * fp_c5.data[24].z;
    // 0x000B78: 0x5C58100001370E13 Fadd
    temp_340 = temp_315 + temp_334;
    // 0x000B88: 0x5C68100001471214 Fmul
    temp_341 = temp_274 * temp_328;
    // 0x000B90: 0x4C68101801671212 Fmul
    temp_342 = temp_274 * fp_c6.data[5].z;
    // 0x000B98: 0x1E23EA2F9837171B Fmul32i
    temp_343 = temp_336 * 0.318309873;
    // 0x000BA8: 0x51A0119801571917 Ffma
    temp_344 = fma(temp_329, temp_101, fp_c6.data[5].y);
    // 0x000BB0: 0x5C68100000771507 Fmul
    temp_345 = temp_339 * temp_337;
    // 0x000BB8: 0x4C68101406271616 Fmul
    temp_346 = temp_338 * fp_c5.data[24].z;
    // 0x000BC8: 0x4C68101406271313 Fmul
    temp_347 = temp_340 * fp_c5.data[24].z;
    // 0x000BD0: 0x51A0121801671919 Ffma
    temp_348 = fma(temp_329, temp_102, fp_c6.data[5].z);
    // 0x000BD8: 0x1E23EA2F9837121D Fmul32i
    temp_349 = temp_342 * 0.318309873;
    // 0x000BE8: 0x5C58100001870D18 Fadd
    temp_350 = temp_314 + temp_325;
    // 0x000BF0: 0x5C6810000147072D Fmul
    temp_351 = temp_345 * temp_341;
    // 0x000BF8: 0x4C68101406271A1A Fmul
    temp_352 = temp_335 * fp_c5.data[24].z;
    // 0x000C08: 0x49A208980AC71107 Ffma
    temp_353 = 0.0 - temp_319;
    temp_354 = fma(temp_319, fp_c6.data[43].x, temp_353);
    // 0x000C10: 0x49A208980AD71112 Ffma
    temp_355 = 0.0 - temp_319;
    temp_356 = fma(temp_319, fp_c6.data[43].y, temp_355);
    // 0x000C18: 0x5B6603800FF71C07 Isetp
    temp_357 = floatBitsToUint(temp_296) <= 0u;
    // 0x000C28: 0x5C68100001771616 Fmul
    temp_358 = temp_346 * temp_344;
    // 0x000C30: 0x5C68100001971319 Fmul
    temp_359 = temp_347 * temp_348;
    // 0x000C38: 0x49A208980AE71111 Ffma
    temp_360 = 0.0 - temp_319;
    temp_361 = fma(temp_319, fp_c6.data[43].z, temp_360);
    // 0x000C48: 0x4C68101406271818 Fmul
    temp_362 = temp_350 * fp_c5.data[24].z;
    // 0x000C50: 0x59A10E8001D71A17 Ffma
    temp_363 = 0.0 - temp_349;
    temp_364 = fma(temp_352, temp_363, temp_349);
    // 0x000C58: 0x3858103F80070707 Fadd
    temp_365 = temp_354 + 1.0;
    // 0x000C68: 0x5C68100001471616 Fmul
    temp_366 = temp_358 * temp_341;
    // 0x000C70: 0x5C68100001471919 Fmul
    temp_367 = temp_359 * temp_341;
    // 0x000C78: 0x3858103F80071212 Fadd
    temp_368 = temp_356 + 1.0;
    // 0x000C88: 0x3858103F8007112C Fadd
    temp_369 = temp_361 + 1.0;
    // 0x000C90: 0x5C68100000972A1D Fmul
    temp_370 = temp_81 * temp_257;
    // 0x000C98: 0x5C68100000970038 Fmul
    temp_371 = temp_80 * temp_257;
    // 0x000CA8: 0x5C68100000973336 Fmul
    temp_372 = temp_79 * temp_257;
    // 0x000CB0: 0x59A10D8001B71813 Ffma
    temp_373 = 0.0 - temp_343;
    temp_374 = fma(temp_362, temp_373, temp_343);
    // 0x000CB8: 0x5C9807800FF70032 Mov
    // 0x000CC8: 0x5C9807800FF7001B Mov
    // 0x000CD0: 0x5C9807800FF70020 Mov
    // 0x000CD8: 0x5C9807800FF70030 Mov
    // 0x000CE8: 0x5C9807800FF70021 Mov
    // 0x000CF0: 0x5C9807800FF70031 Mov
    // 0x000CF8: 0x59A4038000770607 Ffma
    temp_375 = fma(temp_236, temp_365, temp_365);
    temp_376 = clamp(temp_375, 0.0, 1.0);
    // 0x000D08: 0x59A4090001270428 Ffma
    temp_377 = fma(temp_210, temp_368, temp_368);
    temp_378 = clamp(temp_377, 0.0, 1.0);
    // 0x000D10: 0x59A4160002C7052C Ffma
    temp_379 = fma(temp_230, temp_369, temp_369);
    temp_380 = clamp(temp_379, 0.0, 1.0);
    // 0x000D18: 0x32A21BC000071D1D Ffma
    temp_381 = 0.0 - temp_126;
    temp_382 = fma(temp_370, 2.0, temp_381);
    // 0x000D28: 0x32A21AC000073838 Ffma
    temp_383 = 0.0 - temp_128;
    temp_384 = fma(temp_371, 2.0, temp_383);
    // 0x000D30: 0x32A21A4000073636 Ffma
    temp_385 = 0.0 - temp_130;
    temp_386 = fma(temp_372, 2.0, temp_385);
    // 0x000D38: 0x1E23E22F98372D2D Fmul32i
    temp_387 = temp_351 * 0.159154937;
    // 0x000D48: 0x1E23E22F9837162E Fmul32i
    temp_388 = temp_366 * 0.159154937;
    // 0x000D50: 0x1E23E22F9837192F Fmul32i
    temp_389 = temp_367 * 0.159154937;
    // 0x000D58: 0xF0F800000000000F Sync
    temp_390 = 0.0;
    temp_391 = 0.0;
    temp_392 = 0.0;
    temp_393 = 0.0;
    temp_394 = 0.0;
    temp_395 = 0.0;
    temp_396 = 0.0;
    temp_397 = 0.0;
    temp_398 = 0.0;
    temp_399 = 0.0;
    temp_400 = 0.0;
    temp_401 = 0.0;
    if (!temp_357)
    {
        // 0x000D68: 0x5C9807800FF7003B Mov
        // 0x000D70: 0xE043FF8D0107FF1A Ipa
        temp_402 = in_attr5.x;
        // 0x000D78: 0xE043FF8D4107FF16 Ipa
        temp_403 = in_attr5.y;
        // 0x000D88: 0xE043FF8D8107FF12 Ipa
        temp_404 = in_attr5.z;
        temp_405 = 0;
        do
        {
            // 0x000D90: 0x5C18020003B71E3E Iscadd
            temp_407 = int(temp_269) << 4;
            temp_408 = temp_407 + temp_405;
            // 0x000D98: 0xE290000055800000 Ssy
            // 0x000DA8: 0x3848000000473E3E Shl
            temp_409 = temp_408 << 4;
            // 0x000DB0: 0xEF94008200073E39 Ldc
            temp_410 = temp_409 + 0x2000;
            temp_411 = uint(temp_410) >> 2;
            temp_412 = temp_411 >> 2;
            temp_413 = int(temp_411) & 3;
            temp_414 = fp_c8.data[int(temp_412)][temp_413];
            // 0x000DB8: 0x3848000000673939 Shl
            temp_415 = floatBitsToInt(temp_414) << 6;
            // 0x000DC8: 0xEF95008001073910 Ldc
            temp_416 = temp_415 + 16;
            temp_417 = uint(temp_416) >> 2;
            temp_418 = temp_417 >> 2;
            temp_419 = int(temp_417) & 3;
            temp_420 = fp_c8.data[int(temp_418)][temp_419];
            temp_421 = int(temp_417) + 1;
            temp_422 = uint(temp_421) >> 2;
            temp_423 = temp_421 & 3;
            temp_424 = fp_c8.data[int(temp_422)][temp_423];
            // 0x000DD0: 0xEF95008001873914 Ldc
            temp_425 = temp_415 + 24;
            temp_426 = uint(temp_425) >> 2;
            temp_427 = temp_426 >> 2;
            temp_428 = int(temp_426) & 3;
            temp_429 = fp_c8.data[int(temp_427)][temp_428];
            temp_430 = int(temp_426) + 1;
            temp_431 = uint(temp_430) >> 2;
            temp_432 = temp_430 & 3;
            temp_433 = fp_c8.data[int(temp_431)][temp_432];
            // 0x000DD8: 0xEF95008002073918 Ldc
            temp_434 = temp_415 + 32;
            temp_435 = uint(temp_434) >> 2;
            temp_436 = temp_435 >> 2;
            temp_437 = int(temp_435) & 3;
            temp_438 = fp_c8.data[int(temp_436)][temp_437];
            temp_439 = int(temp_435) + 1;
            temp_440 = uint(temp_439) >> 2;
            temp_441 = temp_439 & 3;
            temp_442 = fp_c8.data[int(temp_440)][temp_441];
            // 0x000DE8: 0x5C58300001A7103A Fadd
            temp_443 = 0.0 - temp_402;
            temp_444 = temp_420 + temp_443;
            // 0x000DF0: 0x5C5830000167113C Fadd
            temp_445 = 0.0 - temp_403;
            temp_446 = temp_424 + temp_445;
            // 0x000DF8: 0x5C58300001271414 Fadd
            temp_447 = 0.0 - temp_404;
            temp_448 = temp_429 + temp_447;
            // 0x000E08: 0x5C68100003A73A11 Fmul
            temp_449 = temp_444 * temp_444;
            // 0x000E10: 0x59A10A0001471510 Ffma
            temp_450 = 0.0 - temp_448;
            temp_451 = fma(temp_433, temp_450, temp_448);
            // 0x000E18: 0x59A0088003C73C15 Ffma
            temp_452 = fma(temp_446, temp_446, temp_449);
            // 0x000E28: 0x59A00A800107103D Ffma
            temp_453 = fma(temp_451, temp_451, temp_452);
            // 0x000E30: 0x5080000000573D11 Mufu
            temp_454 = inversesqrt(temp_453);
            // 0x000E38: 0x5080000000873D3E Mufu
            temp_455 = sqrt(temp_453);
            // 0x000E48: 0x5C68100001173A3F Fmul
            temp_456 = temp_444 * temp_454;
            // 0x000E50: 0x5C68100001171010 Fmul
            temp_457 = temp_451 * temp_454;
            // 0x000E58: 0x5C69100001873F3F Fmul
            temp_458 = 0.0 - temp_438;
            temp_459 = temp_456 * temp_458;
            // 0x000E68: 0x5C68100001173C18 Fmul
            temp_460 = temp_446 * temp_454;
            // 0x000E70: 0xEF94008002873911 Ldc
            temp_461 = temp_415 + 40;
            temp_462 = uint(temp_461) >> 2;
            temp_463 = temp_462 >> 2;
            temp_464 = int(temp_462) & 3;
            temp_465 = fp_c8.data[int(temp_463)][temp_464];
            // 0x000E78: 0x59A11F800197183F Ffma
            temp_466 = 0.0 - temp_442;
            temp_467 = fma(temp_460, temp_466, temp_459);
            // 0x000E88: 0x010404000007F018 Mov32i
            // 0x000E90: 0x59A11F800117103F Ffma
            temp_468 = 0.0 - temp_465;
            temp_469 = fma(temp_457, temp_468, temp_467);
            // 0x000E98: 0xEF95008003873910 Ldc
            temp_470 = temp_415 + 56;
            temp_471 = uint(temp_470) >> 2;
            temp_472 = temp_471 >> 2;
            temp_473 = int(temp_471) & 3;
            temp_474 = fp_c8.data[int(temp_472)][temp_473];
            temp_475 = int(temp_471) + 1;
            temp_476 = uint(temp_475) >> 2;
            temp_477 = temp_475 & 3;
            temp_478 = fp_c8.data[int(temp_476)][temp_477];
            // 0x000EA8: 0x59A4088001073F11 Ffma
            temp_479 = fma(temp_469, temp_474, temp_478);
            temp_480 = clamp(temp_479, 0.0, 1.0);
            // 0x000EB0: 0x5C68100001171119 Fmul
            temp_481 = temp_480 * temp_480;
            // 0x000EB8: 0x33A00C4000071110 Ffma
            temp_482 = fma(temp_480, -2.0, 3.0);
            // 0x000EC8: 0x5C68100001071919 Fmul
            temp_483 = temp_481 * temp_482;
            // 0x000ED0: 0xEF95008003073910 Ldc
            temp_484 = temp_415 + 48;
            temp_485 = uint(temp_484) >> 2;
            temp_486 = temp_485 >> 2;
            temp_487 = int(temp_485) & 3;
            temp_488 = fp_c8.data[int(temp_486)][temp_487];
            temp_489 = int(temp_485) + 1;
            temp_490 = uint(temp_489) >> 2;
            temp_491 = temp_489 & 3;
            temp_492 = fp_c8.data[int(temp_490)][temp_491];
            // 0x000ED8: 0x59A4088003E7103E Ffma
            temp_493 = fma(temp_488, temp_455, temp_492);
            temp_494 = clamp(temp_493, 0.0, 1.0);
            // 0x000EE8: 0x33A00C4000073E18 Ffma
            temp_495 = fma(temp_494, -2.0, 3.0);
            // 0x000EF0: 0x5C68100003E73E3E Fmul
            temp_496 = temp_494 * temp_494;
            // 0x000EF8: 0x5C68100001873E18 Fmul
            temp_497 = temp_496 * temp_495;
            // 0x000F08: 0x5C68100001871919 Fmul
            temp_498 = temp_483 * temp_497;
            // 0x000F10: 0x39585042F0071418 Fadd
            temp_499 = abs(temp_448);
            temp_500 = temp_499 + -120.0;
            // 0x000F18: 0x1EABD4CCCCD71818 Fmul32i
            temp_501 = temp_500 * -0.0500000007;
            temp_502 = clamp(temp_501, 0.0, 1.0);
            // 0x000F28: 0x5C6810000187193E Fmul
            temp_503 = temp_498 * temp_502;
            // 0x000F30: 0x36247F9000171818 Xmad
            temp_504 = floatBitsToUint(temp_502) >> 16;
            temp_505 = int(temp_504) << 16;
            // 0x000F38: 0x5BB383800FF73E07 Fsetp
            temp_506 = temp_503 <= 0.0;
            // 0x000F48: 0x7A05083C0F00FF18 Hadd2
            temp_507 = uint(temp_505);
            temp_508 = temp_390;
            temp_509 = temp_391;
            temp_510 = temp_392;
            temp_511 = temp_393;
            temp_512 = temp_394;
            temp_513 = temp_395;
            if (temp_506)
            {
                temp_514 = unpackHalf2x16(uint(temp_505)).y;
                temp_515 = packHalf2x16(vec2(1.0, temp_514));
                temp_507 = temp_515;
            }
            // 0x000F50: 0x5D2103902FF71807 Hsetp2
            temp_516 = unpackHalf2x16(temp_507).x;
            temp_517 = temp_516 == 0.0;
            // 0x000F58: 0xF0F800000008000F Sync
            if (temp_517)
            {
                // 0x000F68: 0x5080000000471010 Mufu
                temp_518 = 1.0 / temp_488;
                // 0x000F70: 0x5C69100001071111 Fmul
                temp_519 = 0.0 - temp_518;
                temp_520 = temp_492 * temp_519;
                // 0x000F78: 0x5C60138001171414 Fmnmx
                temp_521 = min(temp_448, temp_520);
                // 0x000F88: 0x5C61178001471114 Fmnmx
                temp_522 = 0.0 - temp_520;
                temp_523 = max(temp_522, temp_521);
                // 0x000F90: 0x59A00A8001471415 Ffma
                temp_524 = fma(temp_523, temp_523, temp_452);
                // 0x000F98: 0x5080000000571519 Mufu
                temp_525 = inversesqrt(temp_524);
                // 0x000FA8: 0x5080000000871515 Mufu
                temp_526 = sqrt(temp_524);
                // 0x000FB0: 0x5C68100001973A11 Fmul
                temp_527 = temp_444 * temp_525;
                // 0x000FB8: 0x5C68100001973C3A Fmul
                temp_528 = temp_446 * temp_525;
                // 0x000FC8: 0x5C68100001971419 Fmul
                temp_529 = temp_523 * temp_525;
                // 0x000FD0: 0x5C58100001173714 Fadd
                temp_530 = temp_126 + temp_527;
                // 0x000FD8: 0x5C58100003A73518 Fadd
                temp_531 = temp_128 + temp_528;
                // 0x000FE8: 0x5C58100001973410 Fadd
                temp_532 = temp_130 + temp_529;
                // 0x000FF0: 0x5C6810000147143D Fmul
                temp_533 = temp_530 * temp_530;
                // 0x000FF8: 0x59A01E800187183D Ffma
                temp_534 = fma(temp_531, temp_531, temp_533);
                // 0x001008: 0x59A01E800107103C Ffma
                temp_535 = fma(temp_532, temp_532, temp_534);
                // 0x001010: 0x5080000000573C3F Mufu
                temp_536 = inversesqrt(temp_535);
                // 0x001018: 0x5C68100003F71414 Fmul
                temp_537 = temp_530 * temp_536;
                // 0x001028: 0x5C68100003F7183D Fmul
                temp_538 = temp_531 * temp_536;
                // 0x001030: 0x5C68100003F71010 Fmul
                temp_539 = temp_532 * temp_536;
                // 0x001038: 0x5C68100001471118 Fmul
                temp_540 = temp_527 * temp_537;
                // 0x001048: 0x5C68100001172A11 Fmul
                temp_541 = temp_81 * temp_527;
                // 0x001050: 0x59A00C0003D73A3F Ffma
                temp_542 = fma(temp_528, temp_538, temp_540);
                // 0x001058: 0x59A0088003A70018 Ffma
                temp_543 = fma(temp_80, temp_528, temp_541);
                // 0x001068: 0x5C68100001472A3A Fmul
                temp_544 = temp_81 * temp_537;
                // 0x001070: 0x59A41F8001071911 Ffma
                temp_545 = fma(temp_529, temp_539, temp_542);
                temp_546 = clamp(temp_545, 0.0, 1.0);
                // 0x001078: 0xEF94008002C7393F Ldc
                temp_547 = temp_415 + 44;
                temp_548 = uint(temp_547) >> 2;
                temp_549 = temp_548 >> 2;
                temp_550 = int(temp_548) & 3;
                temp_551 = fp_c8.data[int(temp_549)][temp_550];
                // 0x001088: 0x59A00C0001973318 Ffma
                temp_552 = fma(temp_79, temp_529, temp_543);
                // 0x001090: 0x59A01D0003D7003A Ffma
                temp_553 = fma(temp_80, temp_538, temp_544);
                // 0x001098: 0x51A4010400070219 Ffma
                temp_554 = fma(temp_205, temp_205, fp_c1.data[0].x);
                temp_555 = clamp(temp_554, 0.0, 1.0);
                // 0x0010A8: 0x5C5C30000FF71814 Fadd
                temp_556 = temp_552 + -0.0;
                temp_557 = clamp(temp_556, 0.0, 1.0);
                // 0x0010B0: 0x59A41D000107333A Ffma
                temp_558 = fma(temp_79, temp_539, temp_553);
                temp_559 = clamp(temp_558, 0.0, 1.0);
                // 0x0010B8: 0x5C68100001971910 Fmul
                temp_560 = temp_555 * temp_555;
                // 0x0010C8: 0x59A21D0003A71010 Ffma
                temp_561 = 0.0 - temp_559;
                temp_562 = fma(temp_560, temp_559, temp_561);
                // 0x0010D0: 0x51A0080400173A3A Ffma
                temp_563 = fma(temp_559, temp_562, fp_c1.data[0].y);
                // 0x0010D8: 0x59A10A0001472B10 Ffma
                temp_564 = 0.0 - temp_557;
                temp_565 = fma(temp_253, temp_564, temp_557);
                // 0x0010E8: 0x5080000000473A3A Mufu
                temp_566 = 1.0 / temp_563;
                // 0x0010F0: 0x5C58100001072B3D Fadd
                temp_567 = temp_253 + temp_565;
                // 0x0010F8: 0x5080000000473D10 Mufu
                temp_568 = 1.0 / temp_567;
                // 0x001108: 0x5C68100003A71919 Fmul
                temp_569 = temp_555 * temp_566;
                // 0x001110: 0xEF9400800087393D Ldc
                temp_570 = temp_415 + 8;
                temp_571 = uint(temp_570) >> 2;
                temp_572 = temp_571 >> 2;
                temp_573 = int(temp_571) & 3;
                temp_574 = fp_c8.data[int(temp_572)][temp_573];
                // 0x001118: 0x5C68100001071F10 Fmul
                temp_575 = temp_310 * temp_568;
                // 0x001128: 0x5C68100001971919 Fmul
                temp_576 = temp_569 * temp_569;
                // 0x001130: 0x5C68100001071919 Fmul
                temp_577 = temp_576 * temp_575;
                // 0x001138: 0x5080000000473F10 Mufu
                temp_578 = 1.0 / temp_551;
                // 0x001148: 0x5C68100001971419 Fmul
                temp_579 = temp_557 * temp_577;
                // 0x001150: 0x51A00A840047103C Ffma
                temp_580 = fma(temp_578, temp_526, fp_c1.data[1].x);
                // 0x001158: 0x5080000000473C10 Mufu
                temp_581 = 1.0 / temp_580;
                // 0x001168: 0x1E23FB3333371010 Fmul32i
                temp_582 = temp_581 * 1.39999998;
                // 0x001170: 0x5C6810000107103A Fmul
                temp_583 = temp_582 * temp_582;
                // 0x001178: 0x01040DF760C7F010 Mov32i
                // 0x001188: 0x59A11D0003A7183A Ffma
                temp_584 = 0.0 - temp_583;
                temp_585 = fma(temp_552, temp_584, temp_583);
                // 0x001190: 0x49A2080400271110 Ffma
                temp_586 = fma(temp_546, fp_c1.data[0].z, -6.98316002);
                // 0x001198: 0x5C5C100003A71818 Fadd
                temp_587 = temp_552 + temp_585;
                temp_588 = clamp(temp_587, 0.0, 1.0);
                // 0x0011A8: 0x5C6810000107113A Fmul
                temp_589 = temp_546 * temp_586;
                // 0x0011B0: 0xEF95008000073910 Ldc
                temp_590 = uint(temp_415) >> 2;
                temp_591 = temp_590 >> 2;
                temp_592 = int(temp_590) & 3;
                temp_593 = fp_c8.data[int(temp_591)][temp_592];
                temp_594 = int(temp_590) + 1;
                temp_595 = uint(temp_594) >> 2;
                temp_596 = temp_594 & 3;
                temp_597 = fp_c8.data[int(temp_595)][temp_596];
                // 0x0011B8: 0x5C90008003A7003A Rro
                // 0x0011C8: 0x5080000000273A3C Mufu
                temp_598 = exp2(temp_589);
                // 0x0011D0: 0x59A11E0003C70D14 Ffma
                temp_599 = 0.0 - temp_598;
                temp_600 = fma(temp_314, temp_599, temp_598);
                // 0x0011D8: 0x5C58100001470D14 Fadd
                temp_601 = temp_314 + temp_600;
                // 0x0011E8: 0x4C68101406271414 Fmul
                temp_602 = temp_601 * fp_c5.data[24].z;
                // 0x0011F0: 0x5C68100001073E15 Fmul
                temp_603 = temp_503 * temp_593;
                // 0x0011F8: 0x59A11E0003C70A10 Ffma
                temp_604 = 0.0 - temp_598;
                temp_605 = fma(temp_283, temp_604, temp_598);
                // 0x001208: 0x59A11E0003C70E3C Ffma
                temp_606 = 0.0 - temp_598;
                temp_607 = fma(temp_315, temp_606, temp_598);
                // 0x001210: 0x5C68100001173E11 Fmul
                temp_608 = temp_503 * temp_597;
                // 0x001218: 0x5C68100003D73E3E Fmul
                temp_609 = temp_503 * temp_574;
                // 0x001228: 0x5C58100001070A10 Fadd
                temp_610 = temp_283 + temp_605;
                // 0x001230: 0x5C58100003C70E3C Fadd
                temp_611 = temp_315 + temp_607;
                // 0x001238: 0x4C68101406271010 Fmul
                temp_612 = temp_610 * fp_c5.data[24].z;
                // 0x001248: 0x4C68101406273C3C Fmul
                temp_613 = temp_611 * fp_c5.data[24].z;
                // 0x001250: 0x5C6810000157103A Fmul
                temp_614 = temp_612 * temp_603;
                // 0x001258: 0x5C68100001171410 Fmul
                temp_615 = temp_602 * temp_608;
                // 0x001268: 0x5C68100003E73C14 Fmul
                temp_616 = temp_613 * temp_609;
                // 0x001270: 0x5C6810000187113C Fmul
                temp_617 = temp_608 * temp_588;
                // 0x001278: 0x5C68100001871515 Fmul
                temp_618 = temp_603 * temp_588;
                // 0x001288: 0x5C68100001873E18 Fmul
                temp_619 = temp_609 * temp_588;
                // 0x001290: 0x5C68100001973A11 Fmul
                temp_620 = temp_614 * temp_579;
                // 0x001298: 0x5C68100001971010 Fmul
                temp_621 = temp_615 * temp_579;
                // 0x0012A8: 0x5C68100001971419 Fmul
                temp_622 = temp_616 * temp_579;
                // 0x0012B0: 0x49A0108400673C21 Ffma
                temp_623 = fma(temp_617, fp_c1.data[1].z, temp_390);
                // 0x0012B8: 0x49A0180400671530 Ffma
                temp_624 = fma(temp_618, fp_c1.data[1].z, temp_391);
                // 0x0012C8: 0x49A0188400671831 Ffma
                temp_625 = fma(temp_619, fp_c1.data[1].z, temp_392);
                // 0x0012D0: 0x49A0190400571132 Ffma
                temp_626 = fma(temp_620, fp_c1.data[1].y, temp_393);
                // 0x0012D8: 0x49A00D840057101B Ffma
                temp_627 = fma(temp_621, fp_c1.data[1].y, temp_394);
                // 0x0012E8: 0x49A0100400571920 Ffma
                temp_628 = fma(temp_622, fp_c1.data[1].y, temp_395);
                // 0x0012F0: 0xF0F800000007000F Sync
                temp_508 = temp_623;
                temp_509 = temp_624;
                temp_510 = temp_625;
                temp_511 = temp_626;
                temp_512 = temp_627;
                temp_513 = temp_628;
            }
            // 0x0012F8: 0x1C00000000173B3B Iadd32i
            temp_629 = temp_405 + 1;
            // 0x001308: 0x5B6C038001C73B07 Isetp
            temp_406 = uint(temp_629) >= floatBitsToUint(temp_296);
            // 0x001310: 0xE2400FFFA788000F Bra
            temp_405 = temp_629;
            temp_390 = temp_508;
            temp_391 = temp_509;
            temp_392 = temp_510;
            temp_393 = temp_511;
            temp_394 = temp_512;
            temp_395 = temp_513;
            temp_396 = temp_509;
            temp_397 = temp_508;
            temp_398 = temp_513;
            temp_399 = temp_512;
            temp_400 = temp_510;
            temp_401 = temp_511;
        }
        while (!temp_406);
        // 0x001318: 0xF0F800000007000F Sync
    }
    // 0x001328: 0x5C62578000072A10 Fmnmx
    temp_630 = abs(temp_81);
    temp_631 = abs(temp_80);
    temp_632 = max(temp_630, temp_631);
    // 0x001330: 0xE003FF87CFF7FF34 Ipa
    // 0x001338: 0x38681040E0070235 Fmul
    temp_633 = temp_205 * 7.0;
    // 0x001348: 0x5C62578003871D11 Fmnmx
    temp_634 = abs(temp_382);
    temp_635 = abs(temp_384);
    temp_636 = max(temp_634, temp_635);
    // 0x001350: 0x010000000017F01C Mov32i
    // 0x001358: 0x386810408007022B Fmul
    temp_637 = temp_205 * 4.0;
    // 0x001368: 0x4C98079C02070037 Mov
    // 0x001370: 0x5C60578001073310 Fmnmx
    temp_638 = abs(temp_79);
    temp_639 = max(temp_638, temp_632);
    // 0x001378: 0x5080000000471019 Mufu
    temp_640 = 1.0 / temp_639;
    // 0x001388: 0x5C60578001173611 Fmnmx
    temp_641 = abs(temp_386);
    temp_642 = max(temp_641, temp_636);
    // 0x001390: 0x508000000047111F Mufu
    temp_643 = 1.0 / temp_642;
    // 0x001398: 0x5C6910000197331A Fmul
    temp_644 = 0.0 - temp_640;
    temp_645 = temp_79 * temp_644;
    // 0x0013A8: 0x5C68100001972A18 Fmul
    temp_646 = temp_81 * temp_640;
    // 0x0013B0: 0x5080000000473434 Mufu
    // 0x0013B8: 0x5C68100001970019 Fmul
    temp_647 = temp_80 * temp_640;
    // 0x0013C8: 0x5C68100001F71D1D Fmul
    temp_648 = temp_382 * temp_643;
    // 0x0013D0: 0xC0BA0163EFF71810 Tex
    temp_649 = textureLod(fp_t_tcb_16, vec3(temp_646, temp_647, temp_645), 0.0).xyz;
    temp_650 = temp_649.x;
    temp_651 = temp_649.y;
    temp_652 = temp_649.z;
    // 0x0013D8: 0x5C68100001F7381E Fmul
    temp_653 = temp_384 * temp_643;
    // 0x0013E8: 0x5C69100001F7361F Fmul
    temp_654 = 0.0 - temp_643;
    temp_655 = temp_386 * temp_654;
    // 0x0013F0: 0xE043FF910347FF14 Ipa
    temp_656 = in_attr9.x;
    // 0x0013F8: 0x5C98078001A7002A Mov
    // 0x001408: 0xE043FF914347FF15 Ipa
    temp_657 = in_attr9.y;
    // 0x001410: 0x49A007980A17300F Ffma
    temp_658 = fma(temp_396, fp_c6.data[40].y, temp_321);
    // 0x001418: 0xE043FF918347FF16 Ipa
    temp_659 = in_attr9.z;
    // 0x001428: 0xC1BA0143F3571C1C Tex
    temp_660 = textureLod(fp_t_tcb_14, vec4(temp_648, temp_653, temp_655, float(1)), temp_633).xyz;
    temp_661 = temp_660.x;
    temp_662 = temp_660.y;
    temp_663 = temp_660.z;
    // 0x001430: 0xD9A2018332A7182A Texs
    temp_664 = textureLod(fp_t_tcb_18, vec3(temp_646, temp_647, temp_645), temp_637).xyz;
    temp_665 = temp_664.x;
    temp_666 = temp_664.y;
    temp_667 = temp_664.z;
    // 0x001438: 0xDEBA0000C3771414 TexB
    temp_668 = texture(fp_t_cb7_20, vec3(temp_656, temp_657, temp_659)).x;
    // 0x001448: 0x3859103F80070202 Fadd
    temp_669 = 0.0 - temp_205;
    temp_670 = temp_669 + 1.0;
    // 0x001450: 0x4C9807980B470030 Mov
    // 0x001458: 0x49A009980A172113 Ffma
    temp_671 = fma(temp_397, fp_c6.data[40].y, temp_374);
    // 0x001468: 0x49A017980A17202F Ffma
    temp_672 = fma(temp_398, fp_c6.data[40].y, temp_389);
    // 0x001470: 0x0103F0000007F021 Mov32i
    // 0x001478: 0x1E23E468DB97091F Fmul32i
    temp_673 = temp_257 * 0.193900004;
    // 0x001488: 0x5C6810000027021A Fmul
    temp_674 = temp_670 * temp_670;
    // 0x001490: 0xF0F0000034370000 Depbar
    // 0x001498: 0x51A218180B472727 Ffma
    temp_675 = 0.0 - fp_c6.data[45].x;
    temp_676 = fma(temp_114, fp_c6.data[45].x, temp_675);
    // 0x0014A8: 0x51A218180B472626 Ffma
    temp_677 = 0.0 - fp_c6.data[45].x;
    temp_678 = fma(temp_113, fp_c6.data[45].x, temp_677);
    // 0x0014B0: 0x010410676C97F020 Mov32i
    // 0x0014B8: 0x49A017180A171B2E Ffma
    temp_679 = fma(temp_399, fp_c6.data[40].y, temp_388);
    // 0x0014C8: 0x4C98079800970018 Mov
    // 0x0014D0: 0x5C68100001A71A1A Fmul
    temp_680 = temp_674 * temp_674;
    // 0x0014D8: 0x4C98079800A70019 Mov
    // 0x0014E8: 0x32A010BF0007001B Ffma
    temp_681 = fma(temp_80, 0.5, 0.5);
    // 0x0014F0: 0x49A0100400A70920 Ffma
    temp_682 = fma(temp_257, fp_c1.data[2].z, 8.40400028);
    // 0x0014F8: 0x51A218180B470115 Ffma
    temp_683 = 0.0 - fp_c6.data[45].x;
    temp_684 = fma(temp_115, fp_c6.data[45].x, temp_683);
    // 0x001508: 0x3859103F80070930 Fadd
    temp_685 = 0.0 - temp_257;
    temp_686 = temp_685 + 1.0;
    // 0x001510: 0x4C98079800870016 Mov
    // 0x001518: 0x5080000000373001 Mufu
    temp_687 = log2(temp_686);
    // 0x001528: 0x49A00F8400771A1F Ffma
    temp_688 = fma(temp_680, fp_c1.data[1].w, temp_673);
    // 0x001530: 0x4C98079406B70000 Mov
    // 0x001538: 0x4C59101800571818 Fadd
    temp_689 = 0.0 - fp_c6.data[2].y;
    temp_690 = temp_689 + fp_c6.data[1].y;
    // 0x001548: 0x4C68101809073002 Fmul
    temp_691 = temp_686 * fp_c6.data[36].x;
    // 0x001550: 0x4C59101800671919 Fadd
    temp_692 = 0.0 - fp_c6.data[2].z;
    temp_693 = temp_692 + fp_c6.data[1].z;
    // 0x001558: 0x5080400000370202 Mufu
    temp_694 = abs(temp_691);
    temp_695 = log2(temp_694);
    // 0x001568: 0x4C59101800471616 Fadd
    temp_696 = 0.0 - fp_c6.data[2].x;
    temp_697 = temp_696 + fp_c6.data[1].x;
    // 0x001570: 0x51A0100400B70920 Ffma
    temp_698 = fma(temp_257, temp_682, fp_c1.data[2].w);
    // 0x001578: 0x088BF05D63971F1F Fadd32i
    temp_699 = temp_688 + -0.522800028;
    // 0x001588: 0x4C68101809D70021 Fmul
    temp_700 = fp_c5.data[26].w * fp_c6.data[39].y;
    // 0x001590: 0x0103E2CD9E87F030 Mov32i
    // 0x001598: 0x49A00B980A173117 Ffma
    temp_701 = fma(temp_400, fp_c6.data[40].y, temp_364);
    // 0x0015A8: 0x4C68101808970101 Fmul
    temp_702 = temp_687 * fp_c6.data[34].y;
    // 0x0015B0: 0x51A00D9800871616 Ffma
    temp_703 = fma(temp_697, temp_681, fp_c6.data[2].x);
    // 0x0015B8: 0x51A00D9800971818 Ffma
    temp_704 = fma(temp_690, temp_681, fp_c6.data[2].y);
    // 0x0015C8: 0x51A00D9800A71919 Ffma
    temp_705 = fma(temp_693, temp_681, fp_c6.data[2].z);
    // 0x0015D0: 0x51A0100400D7091B Ffma
    temp_706 = fma(temp_257, temp_698, fp_c1.data[3].y);
    // 0x0015D8: 0x5C68100001F7091F Fmul
    temp_707 = temp_257 * temp_699;
    // 0x0015E8: 0x4C68101809170202 Fmul
    temp_708 = temp_695 * fp_c6.data[36].y;
    // 0x0015F0: 0x5C90008000170031 Rro
    // 0x0015F8: 0x5C68100002170801 Fmul
    temp_709 = temp_282 * temp_700;
    // 0x001608: 0x49A2180400C71A09 Ffma
    temp_710 = fma(temp_680, fp_c1.data[3].x, -0.168799996);
    // 0x001610: 0x0104066978D7F008 Mov32i
    // 0x001618: 0x49A016980A17322D Ffma
    temp_711 = fma(temp_401, fp_c6.data[40].y, temp_387);
    // 0x001628: 0x4C68101809C70030 Fmul
    temp_712 = fp_c5.data[26].w * fp_c6.data[39].x;
    // 0x001630: 0x5C90008000270020 Rro
    // 0x001638: 0x4C98079809670032 Mov
    // 0x001648: 0x5084000000272020 Mufu
    temp_713 = exp2(temp_708);
    temp_714 = clamp(temp_713, 0.0, 1.0);
    // 0x001650: 0x5C68100000971A02 Fmul
    temp_715 = temp_680 * temp_710;
    // 0x001658: 0x5084000000273109 Mufu
    temp_716 = exp2(temp_702);
    temp_717 = clamp(temp_716, 0.0, 1.0);
    // 0x001668: 0x49A2040400871A08 Ffma
    temp_718 = fma(temp_680, fp_c1.data[2].x, -3.60299993);
    // 0x001670: 0x4C68101809E70021 Fmul
    temp_719 = fp_c5.data[26].w * fp_c6.data[39].z;
    // 0x001678: 0x5C68100003070B00 Fmul
    temp_720 = temp_300 * temp_712;
    // 0x001688: 0x4C98079808670030 Mov
    // 0x001690: 0x4C5810140817320B Fadd
    temp_721 = fp_c6.data[37].z + fp_c5.data[32].y;
    // 0x001698: 0x4C68101808772525 Fmul
    temp_722 = temp_103 * fp_c6.data[33].w;
    // 0x0016A8: 0x51A0040400971A08 Ffma
    temp_723 = fma(temp_680, temp_718, fp_c1.data[2].y);
    // 0x0016B0: 0x5C60138001B70232 Fmnmx
    temp_724 = min(temp_715, temp_706);
    // 0x0016B8: 0x5C68100002170C02 Fmul
    temp_725 = temp_302 * temp_719;
    // 0x0016C8: 0x4C98079408270021 Mov
    // 0x0016D0: 0x5C68100002070B0B Fmul
    temp_726 = temp_721 * temp_714;
    // 0x0016D8: 0x59A00F8000871A1F Ffma
    temp_727 = fma(temp_680, temp_723, temp_707);
    // 0x0016E8: 0xE04BFF904347FF08 Ipa
    temp_728 = in_attr8.y;
    temp_729 = clamp(temp_728, 0.0, 1.0);
    // 0x0016F0: 0x4C68101808870909 Fmul
    temp_730 = temp_717 * fp_c6.data[34].x;
    // 0x0016F8: 0x386C104248070D1B Fmul
    temp_731 = temp_314 * 50.0;
    temp_732 = clamp(temp_731, 0.0, 1.0);
    // 0x001708: 0x5C5C30000FF73220 Fadd
    temp_733 = temp_724 + -0.0;
    temp_734 = clamp(temp_733, 0.0, 1.0);
    // 0x001710: 0x4C68101406272121 Fmul
    temp_735 = fp_c5.data[32].z * fp_c5.data[24].z;
    // 0x001718: 0x4C68101808D70B0C Fmul
    temp_736 = temp_726 * fp_c6.data[35].y;
    // 0x001728: 0x4C5C100400E71F1F Fadd
    temp_737 = temp_727 + fp_c1.data[3].z;
    temp_738 = clamp(temp_737, 0.0, 1.0);
    // 0x001730: 0x4C68101808E70B1A Fmul
    temp_739 = temp_726 * fp_c6.data[35].z;
    // 0x001738: 0x4C68101808C70B0B Fmul
    temp_740 = temp_726 * fp_c6.data[35].x;
    // 0x001748: 0x51A0181808670909 Ffma
    temp_741 = fma(temp_730, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001750: 0x5C68100002071B30 Fmul
    temp_742 = temp_732 * temp_734;
    // 0x001758: 0x59A0170002170C2E Ffma
    temp_743 = fma(temp_736, temp_735, temp_679);
    // 0x001768: 0x5C59100001F7201F Fadd
    temp_744 = 0.0 - temp_734;
    temp_745 = temp_744 + temp_738;
    // 0x001770: 0x49A1061408270C0C Ffma
    temp_746 = 0.0 - fp_c5.data[32].z;
    temp_747 = fma(temp_736, temp_746, temp_736);
    // 0x001778: 0x49A1059408270B20 Ffma
    temp_748 = 0.0 - fp_c5.data[32].z;
    temp_749 = fma(temp_740, temp_748, temp_740);
    // 0x001788: 0x59A0178002171A2F Ffma
    temp_750 = fma(temp_739, temp_735, temp_672);
    // 0x001790: 0x49A10D1408271A1A Ffma
    temp_751 = 0.0 - fp_c5.data[32].z;
    temp_752 = fma(temp_739, temp_751, temp_739);
    // 0x001798: 0x59A0168002170B2D Ffma
    temp_753 = fma(temp_740, temp_735, temp_711);
    // 0x0017A8: 0x59A0180001F70A0A Ffma
    temp_754 = fma(temp_283, temp_745, temp_742);
    // 0x0017B0: 0x59A0180001F70D0D Ffma
    temp_755 = fma(temp_314, temp_745, temp_742);
    // 0x0017B8: 0x5C58100002070F0F Fadd
    temp_756 = temp_658 + temp_749;
    // 0x0017C8: 0x5C58100000C71313 Fadd
    temp_757 = temp_671 + temp_747;
    // 0x0017D0: 0x59A0180001F70E0E Ffma
    temp_758 = fma(temp_315, temp_745, temp_742);
    // 0x0017D8: 0x5C58100001A71717 Fadd
    temp_759 = temp_701 + temp_752;
    // 0x0017E8: 0x4C68101406270A0A Fmul
    temp_760 = temp_754 * fp_c5.data[24].z;
    // 0x0017F0: 0x4C68101406270D0D Fmul
    temp_761 = temp_755 * fp_c5.data[24].z;
    // 0x0017F8: 0x010404000007F00B Mov32i
    // 0x001808: 0x4C68101406270E0E Fmul
    temp_762 = temp_758 * fp_c5.data[24].z;
    // 0x001810: 0x33A005C00007080B Ffma
    temp_763 = fma(temp_729, -2.0, 3.0);
    // 0x001818: 0x5C68100000870808 Fmul
    temp_764 = temp_729 * temp_729;
    // 0x001828: 0x5C68100000870B08 Fmul
    temp_765 = temp_763 * temp_764;
    // 0x001830: 0x4C9807980287000B Mov
    // 0x001838: 0x4C68101803770808 Fmul
    temp_766 = temp_765 * fp_c6.data[13].w;
    // 0x001848: 0x51A0059802872626 Ffma
    temp_767 = fma(temp_678, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001850: 0xF0F0000034270000 Depbar
    // 0x001858: 0x49A0080400671610 Ffma
    temp_768 = fma(temp_703, fp_c1.data[1].z, temp_650);
    // 0x001868: 0x49A0088400671818 Ffma
    temp_769 = fma(temp_704, fp_c1.data[1].z, temp_651);
    // 0x001870: 0x49A0090400671912 Ffma
    temp_770 = fma(temp_705, fp_c1.data[1].z, temp_652);
    // 0x001878: 0x59A2080000972222 Ffma
    temp_771 = 0.0 - temp_768;
    temp_772 = fma(temp_100, temp_741, temp_771);
    // 0x001888: 0x59A20C0000972323 Ffma
    temp_773 = 0.0 - temp_769;
    temp_774 = fma(temp_101, temp_741, temp_773);
    // 0x001890: 0x59A2090000972424 Ffma
    temp_775 = 0.0 - temp_770;
    temp_776 = fma(temp_102, temp_741, temp_775);
    // 0x001898: 0xE043FF900347FF09 Ipa
    temp_777 = in_attr8.x;
    // 0x0018A8: 0x59A0080002572222 Ffma
    temp_778 = fma(temp_772, temp_722, temp_768);
    // 0x0018B0: 0xE043FF8C8347FF34 Ipa
    temp_779 = in_attr4.z;
    // 0x0018B8: 0x59A00C0002572318 Ffma
    temp_780 = fma(temp_774, temp_722, temp_769);
    // 0x0018C8: 0xF0F0000034170000 Depbar
    // 0x0018D0: 0x49A0151808571C1C Ffma
    temp_781 = fma(temp_661, fp_c6.data[33].y, temp_665);
    // 0x0018D8: 0x59A0090002572424 Ffma
    temp_782 = fma(temp_776, temp_722, temp_770);
    // 0x0018E8: 0x49A0159808571D2B Ffma
    temp_783 = fma(temp_662, fp_c6.data[33].y, temp_666);
    // 0x0018F0: 0x49A0199808571E0C Ffma
    temp_784 = fma(temp_663, fp_c6.data[33].y, temp_667);
    // 0x0018F8: 0x5C58100000F7220F Fadd
    temp_785 = temp_778 + temp_756;
    // 0x001908: 0x5C58100001371813 Fadd
    temp_786 = temp_780 + temp_757;
    // 0x001910: 0x59A0168001C70A2D Ffma
    temp_787 = fma(temp_760, temp_781, temp_753);
    // 0x001918: 0x5C58100001772417 Fadd
    temp_788 = temp_782 + temp_759;
    // 0x001928: 0x59A0170002B70D0D Ffma
    temp_789 = fma(temp_761, temp_783, temp_743);
    // 0x001930: 0x59A0178000C70E0E Ffma
    temp_790 = fma(temp_762, temp_784, temp_750);
    // 0x001938: 0x59A1078000F7290F Ffma
    temp_791 = 0.0 - temp_785;
    temp_792 = fma(temp_106, temp_791, temp_785);
    // 0x001948: 0x59A1098001372913 Ffma
    temp_793 = 0.0 - temp_786;
    temp_794 = fma(temp_106, temp_793, temp_786);
    // 0x001950: 0x49A204180357080A Ffma
    temp_795 = 0.0 - temp_766;
    temp_796 = fma(temp_766, fp_c6.data[13].y, temp_795);
    // 0x001958: 0x59A10B8001772917 Ffma
    temp_797 = 0.0 - temp_788;
    temp_798 = fma(temp_106, temp_797, temp_788);
    // 0x001968: 0x59A0168000F7062D Ffma
    temp_799 = fma(temp_236, temp_792, temp_787);
    // 0x001970: 0x59A006800137040D Ffma
    temp_800 = fma(temp_210, temp_794, temp_789);
    // 0x001978: 0x4C98079802970006 Mov
    // 0x001988: 0x59A007000177050E Ffma
    temp_801 = fma(temp_230, temp_798, temp_790);
    // 0x001990: 0x5C68100002D70707 Fmul
    temp_802 = temp_376 * temp_799;
    // 0x001998: 0x5C68100000D72828 Fmul
    temp_803 = temp_378 * temp_800;
    // 0x0019A8: 0x49A504980BC71409 Ffma
    temp_804 = 0.0 - fp_c6.data[47].x;
    temp_805 = fma(temp_668, temp_804, temp_777);
    temp_806 = clamp(temp_805, 0.0, 1.0);
    // 0x0019B0: 0x51A0031802972727 Ffma
    temp_807 = fma(temp_676, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0019B8: 0x5080000000370909 Mufu
    temp_808 = log2(temp_806);
    // 0x0019C8: 0x4C98079802A70006 Mov
    // 0x0019D0: 0x49A0039406C70000 Ffma
    temp_809 = fma(temp_720, fp_c5.data[27].x, temp_802);
    // 0x0019D8: 0x5C68100000E72C2C Fmul
    temp_810 = temp_380 * temp_801;
    // 0x0019E8: 0x49A0141406C70101 Ffma
    temp_811 = fma(temp_709, fp_c5.data[27].x, temp_803);
    // 0x0019F0: 0x51A0031802A71515 Ffma
    temp_812 = fma(temp_684, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x0019F8: 0x5C58300002670004 Fadd
    temp_813 = 0.0 - temp_767;
    temp_814 = temp_809 + temp_813;
    // 0x001A08: 0x49A0161406C70202 Ffma
    temp_815 = fma(temp_725, fp_c5.data[27].x, temp_810);
    // 0x001A10: 0x5C58300002770105 Fadd
    temp_816 = 0.0 - temp_807;
    temp_817 = temp_811 + temp_816;
    // 0x001A18: 0x4C68101803170906 Fmul
    temp_818 = temp_808 * fp_c6.data[12].y;
    // 0x001A28: 0x49A013180BF70407 Ffma
    temp_819 = fma(temp_814, fp_c6.data[47].w, temp_767);
    // 0x001A30: 0x5C58300001570204 Fadd
    temp_820 = 0.0 - temp_812;
    temp_821 = temp_815 + temp_820;
    // 0x001A38: 0x49A013980BF70505 Ffma
    temp_822 = fma(temp_817, fp_c6.data[47].w, temp_807);
    // 0x001A48: 0x49A2041803670809 Ffma
    temp_823 = 0.0 - temp_766;
    temp_824 = fma(temp_766, fp_c6.data[13].z, temp_823);
    // 0x001A50: 0x5C9000800067000B Rro
    // 0x001A58: 0x49A2041803470806 Ffma
    temp_825 = 0.0 - temp_766;
    temp_826 = fma(temp_766, fp_c6.data[13].x, temp_825);
    // 0x001A68: 0x5080000000270B0B Mufu
    temp_827 = exp2(temp_818);
    // 0x001A70: 0x49A00A980BF70404 Ffma
    temp_828 = fma(temp_821, fp_c6.data[47].w, temp_812);
    // 0x001A78: 0x5C60178000572705 Fmnmx
    temp_829 = max(temp_807, temp_822);
    // 0x001A88: 0x5C60178000772607 Fmnmx
    temp_830 = max(temp_767, temp_819);
    // 0x001A90: 0x5C60178000471504 Fmnmx
    temp_831 = max(temp_812, temp_828);
    // 0x001A98: 0x59A0028000A7050A Ffma
    temp_832 = fma(temp_829, temp_796, temp_829);
    // 0x001AA8: 0x59A0038000670707 Ffma
    temp_833 = fma(temp_830, temp_826, temp_830);
    // 0x001AB0: 0x59A0020000970409 Ffma
    temp_834 = fma(temp_831, temp_824, temp_831);
    // 0x001AB8: 0x4C68101802B70B06 Fmul
    temp_835 = temp_827 * fp_c6.data[10].w;
    // 0x001AC8: 0x5C59100000A70104 Fadd
    temp_836 = 0.0 - temp_811;
    temp_837 = temp_836 + temp_832;
    // 0x001AD0: 0x5C59100000770005 Fadd
    temp_838 = 0.0 - temp_809;
    temp_839 = temp_838 + temp_833;
    // 0x001AD8: 0x5C59100000970207 Fadd
    temp_840 = 0.0 - temp_815;
    temp_841 = temp_840 + temp_834;
    // 0x001AE8: 0x59A0008000670401 Ffma
    temp_842 = fma(temp_837, temp_835, temp_811);
    // 0x001AF0: 0x4C58100C03873404 Fadd
    temp_843 = temp_779 + fp_c3.data[14].x;
    // 0x001AF8: 0x59A0000000670500 Ffma
    temp_844 = fma(temp_839, temp_835, temp_809);
    // 0x001B08: 0x0103EC000007F005 Mov32i
    // 0x001B10: 0x59A0010000670702 Ffma
    temp_845 = fma(temp_841, temp_835, temp_815);
    // 0x001B18: 0x5C98078000370007 Mov
    // 0x001B28: 0x5C9807800FF70006 Mov
    // 0x001B30: 0x49A37F8C03C70404 Ffma
    temp_846 = 0.0 - fp_c3.data[15].x;
    temp_847 = fma(temp_843, temp_846, -0.0);
    // 0x001B38: 0xE30000000007000F Exit
    out_attr0.x = temp_844;
    out_attr0.y = temp_842;
    out_attr0.z = temp_845;
    out_attr0.w = temp_98;
    out_attr1.x = temp_847;
    out_attr1.y = 0.375;
    out_attr1.z = 0.0;
    out_attr1.w = temp_98;
    return;
}
