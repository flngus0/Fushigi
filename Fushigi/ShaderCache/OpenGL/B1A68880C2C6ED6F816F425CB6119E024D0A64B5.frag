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

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform samplerCube fp_t_tcb_18;
layout (binding = 3) uniform sampler2D fp_t_tcb_24;
layout (binding = 4) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform sampler2D fp_t_tcb_20;
layout (binding = 7) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 7) in vec4 in_attr7;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise vec3 temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
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
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise vec3 temp_111;
    precise float temp_112;
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
    precise vec4 temp_123;
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
    precise vec3 temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise vec3 temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise vec3 temp_143;
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
    precise float temp_269;
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
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
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
    precise float temp_357;
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
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    precise float temp_408;
    precise float temp_409;
    precise float temp_410;
    precise float temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    precise float temp_418;
    precise float temp_419;
    // 0x000008: 0x4C98079C0207001B Mov
    // 0x000010: 0xE003FF87CFF7FF04 Ipa
    // 0x000018: 0x5080000000470404 Mufu
    // 0x000028: 0xE043FF8D0047FF00 Ipa
    temp_0 = in_attr5.x;
    // 0x000030: 0xE043FF8D4047FF01 Ipa
    temp_1 = in_attr5.y;
    // 0x000038: 0xD830026FF0170002 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD824036140170006 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xE043FF890047FF0B Ipa
    temp_9 = in_attr1.x;
    // 0x000058: 0xE043FF894047FF0C Ipa
    temp_10 = in_attr1.y;
    // 0x000068: 0xE043FF8A0047FF05 Ipa
    temp_11 = in_attr2.x;
    // 0x000070: 0xE043FF880047FF10 Ipa
    temp_12 = in_attr0.x;
    // 0x000078: 0xE043FF898047FF0D Ipa
    temp_13 = in_attr1.z;
    // 0x000088: 0xE043FF8A4047FF08 Ipa
    temp_14 = in_attr2.y;
    // 0x000090: 0xE043FF884047FF11 Ipa
    temp_15 = in_attr0.y;
    // 0x000098: 0xE043FF8A8047FF09 Ipa
    temp_16 = in_attr2.z;
    // 0x0000A8: 0xE043FF888047FF12 Ipa
    temp_17 = in_attr0.z;
    // 0x0000B0: 0xE043FF8B0047FF16 Ipa
    temp_18 = in_attr3.x;
    // 0x0000B8: 0xE043FF8B8047FF15 Ipa
    temp_19 = in_attr3.z;
    // 0x0000C8: 0xE003FF870FF7FF1F Ipa
    temp_20 = gl_FragCoord.x;
    temp_21 = support_buffer.render_scale[0];
    temp_22 = temp_20 / temp_21;
    // 0x0000D0: 0xE003FF874FF7FF1E Ipa
    temp_23 = gl_FragCoord.y;
    temp_24 = support_buffer.render_scale[0];
    temp_25 = temp_23 / temp_24;
    // 0x0000D8: 0x5C68100000B70B0E Fmul
    temp_26 = temp_9 * temp_9;
    // 0x0000E8: 0x5C6810000057050A Fmul
    temp_27 = temp_11 * temp_11;
    // 0x0000F0: 0x5C6810000107100F Fmul
    temp_28 = temp_12 * temp_12;
    // 0x0000F8: 0x59A0070000C70C0E Ffma
    temp_29 = fma(temp_10, temp_10, temp_26);
    // 0x000108: 0x59A005000087080A Ffma
    temp_30 = fma(temp_14, temp_14, temp_27);
    // 0x000110: 0x59A007800117110F Ffma
    temp_31 = fma(temp_15, temp_15, temp_28);
    // 0x000118: 0x4C68100C04A71F1F Fmul
    temp_32 = temp_22 * fp_c3.data[18].z;
    // 0x000128: 0x59A0070000D70D0E Ffma
    temp_33 = fma(temp_13, temp_13, temp_29);
    // 0x000130: 0x4C68100C04B71E1E Fmul
    temp_34 = temp_25 * fp_c3.data[18].w;
    // 0x000138: 0x5080000000570E0E Mufu
    temp_35 = inversesqrt(temp_33);
    // 0x000148: 0x59A005000097090A Ffma
    temp_36 = fma(temp_16, temp_16, temp_30);
    // 0x000150: 0x59A0078001271213 Ffma
    temp_37 = fma(temp_17, temp_17, temp_31);
    // 0x000158: 0x5080000000570A0A Mufu
    temp_38 = inversesqrt(temp_36);
    // 0x000168: 0x5C68100000E70C0F Fmul
    temp_39 = temp_10 * temp_35;
    // 0x000170: 0x5080000000571313 Mufu
    temp_40 = inversesqrt(temp_37);
    // 0x000178: 0x5C68100000E70D0C Fmul
    temp_41 = temp_13 * temp_35;
    // 0x000188: 0x5C68100000E70B0B Fmul
    temp_42 = temp_9 * temp_35;
    // 0x000190: 0x5C68100000A70505 Fmul
    temp_43 = temp_11 * temp_38;
    // 0x000198: 0x5C68100000A70808 Fmul
    temp_44 = temp_14 * temp_38;
    // 0x0001A8: 0x5C68100000A70909 Fmul
    temp_45 = temp_16 * temp_38;
    // 0x0001B0: 0x5C6810000137110A Fmul
    temp_46 = temp_15 * temp_40;
    // 0x0001B8: 0xE043FF8B4047FF11 Ipa
    temp_47 = in_attr3.y;
    // 0x0001C8: 0x5C68100001371212 Fmul
    temp_48 = temp_17 * temp_40;
    // 0x0001D0: 0x5C68100001371010 Fmul
    temp_49 = temp_12 * temp_40;
    // 0x0001D8: 0xF0F0000034170000 Depbar
    // 0x0001E8: 0x5C6810000037030D Fmul
    temp_50 = temp_4 * temp_4;
    // 0x0001F0: 0x5C68100000370505 Fmul
    temp_51 = temp_43 * temp_4;
    // 0x0001F8: 0x5C68100000370808 Fmul
    temp_52 = temp_44 * temp_4;
    // 0x000208: 0x5C68100000370909 Fmul
    temp_53 = temp_45 * temp_4;
    // 0x000210: 0x5C68100001671603 Fmul
    temp_54 = temp_18 * temp_18;
    // 0x000218: 0x59A006800027020D Ffma
    temp_55 = fma(temp_3, temp_3, temp_50);
    // 0x000228: 0x59A0028000B70205 Ffma
    temp_56 = fma(temp_3, temp_42, temp_51);
    // 0x000230: 0xE003FF87CFF7FF0B Ipa
    // 0x000238: 0x59A0040000F70208 Ffma
    temp_57 = fma(temp_3, temp_39, temp_52);
    // 0x000248: 0x59A0048000C70209 Ffma
    temp_58 = fma(temp_3, temp_41, temp_53);
    // 0x000250: 0x59A0018001171103 Ffma
    temp_59 = fma(temp_47, temp_47, temp_54);
    // 0x000258: 0x4C6810180A070606 Fmul
    temp_60 = temp_6 * fp_c6.data[40].x;
    // 0x000268: 0x385D103F80070D0D Fadd
    temp_61 = 0.0 - temp_55;
    temp_62 = temp_61 + 1.0;
    temp_63 = clamp(temp_62, 0.0, 1.0);
    // 0x000270: 0x010000000017F00C Mov32i
    // 0x000278: 0x5080000000870D13 Mufu
    temp_64 = sqrt(temp_63);
    // 0x000288: 0x59A0018001571503 Ffma
    temp_65 = fma(temp_19, temp_19, temp_59);
    // 0x000290: 0x386013BF80070606 Fmnmx
    temp_66 = min(temp_60, 1.0);
    // 0x000298: 0x5080000000570303 Mufu
    temp_67 = inversesqrt(temp_65);
    // 0x0002A8: 0x4C6017840007061A Fmnmx
    temp_68 = max(temp_66, fp_c1.data[0].x);
    // 0x0002B0: 0x59A0028001371005 Ffma
    temp_69 = fma(temp_49, temp_64, temp_56);
    // 0x0002B8: 0x59A0040001370A08 Ffma
    temp_70 = fma(temp_46, temp_64, temp_57);
    // 0x0002C8: 0x59A0048001371209 Ffma
    temp_71 = fma(temp_48, temp_64, temp_58);
    // 0x0002D0: 0x5080000000470B0B Mufu
    // 0x0002D8: 0x5C68100000570502 Fmul
    temp_72 = temp_69 * temp_69;
    // 0x0002E8: 0x5C69100000371616 Fmul
    temp_73 = 0.0 - temp_67;
    temp_74 = temp_18 * temp_73;
    // 0x0002F0: 0x5C69100000371111 Fmul
    temp_75 = 0.0 - temp_67;
    temp_76 = temp_47 * temp_75;
    // 0x0002F8: 0x5C69100000371515 Fmul
    temp_77 = 0.0 - temp_67;
    temp_78 = temp_19 * temp_77;
    // 0x000308: 0x3868104080071A1D Fmul
    temp_79 = temp_68 * 4.0;
    // 0x000310: 0xE043FF9080B7FF06 Ipa
    temp_80 = in_attr8.z;
    // 0x000318: 0x59A0010000870802 Ffma
    temp_81 = fma(temp_70, temp_70, temp_72);
    // 0x000328: 0x38681040E0071A21 Fmul
    temp_82 = temp_68 * 7.0;
    // 0x000330: 0x59A0010000970902 Ffma
    temp_83 = fma(temp_71, temp_71, temp_81);
    // 0x000338: 0x5080000000570202 Mufu
    temp_84 = inversesqrt(temp_83);
    // 0x000348: 0x5C68100000270517 Fmul
    temp_85 = temp_69 * temp_84;
    // 0x000350: 0x5C68100000270818 Fmul
    temp_86 = temp_70 * temp_84;
    // 0x000358: 0x5C68100000270910 Fmul
    temp_87 = temp_71 * temp_84;
    // 0x000368: 0x5C6810000177160A Fmul
    temp_88 = temp_74 * temp_85;
    // 0x000370: 0x5C62578001871709 Fmnmx
    temp_89 = abs(temp_85);
    temp_90 = abs(temp_86);
    temp_91 = max(temp_89, temp_90);
    // 0x000378: 0x59A005000187110A Ffma
    temp_92 = fma(temp_76, temp_86, temp_88);
    // 0x000388: 0x5C60578000971009 Fmnmx
    temp_93 = abs(temp_87);
    temp_94 = max(temp_93, temp_91);
    // 0x000390: 0x5080000000470909 Mufu
    temp_95 = 1.0 / temp_94;
    // 0x000398: 0x59A4050001071519 Ffma
    temp_96 = fma(temp_78, temp_87, temp_92);
    temp_97 = clamp(temp_96, 0.0, 1.0);
    // 0x0003A8: 0x5C68100001971703 Fmul
    temp_98 = temp_85 * temp_97;
    // 0x0003B0: 0x5C68100001971802 Fmul
    temp_99 = temp_86 * temp_97;
    // 0x0003B8: 0x5C68100001971004 Fmul
    temp_100 = temp_87 * temp_97;
    // 0x0003C8: 0x5C68100000971712 Fmul
    temp_101 = temp_85 * temp_95;
    // 0x0003D0: 0x5C68100000971813 Fmul
    temp_102 = temp_86 * temp_95;
    // 0x0003D8: 0x32A20B4000070303 Ffma
    temp_103 = 0.0 - temp_74;
    temp_104 = fma(temp_98, 2.0, temp_103);
    // 0x0003E8: 0x32A208C000070202 Ffma
    temp_105 = 0.0 - temp_76;
    temp_106 = fma(temp_99, 2.0, temp_105);
    // 0x0003F0: 0x32A20AC000070404 Ffma
    temp_107 = 0.0 - temp_78;
    temp_108 = fma(temp_100, 2.0, temp_107);
    // 0x0003F8: 0x5C6910000097101C Fmul
    temp_109 = 0.0 - temp_95;
    temp_110 = temp_87 * temp_109;
    // 0x000408: 0x5C98078001270008 Mov
    // 0x000410: 0x5C98078001370009 Mov
    // 0x000418: 0xD9A20181D1C71212 Texs
    temp_111 = textureLod(fp_t_tcb_18, vec3(temp_101, temp_102, temp_110), temp_79).xyz;
    temp_112 = temp_111.x;
    temp_113 = temp_111.y;
    temp_114 = temp_111.z;
    // 0x000428: 0x5C62578000270305 Fmnmx
    temp_115 = abs(temp_104);
    temp_116 = abs(temp_106);
    temp_117 = max(temp_115, temp_116);
    // 0x000430: 0x5C98078001C7000A Mov
    // 0x000438: 0x5C60578000570405 Fmnmx
    temp_118 = abs(temp_108);
    temp_119 = max(temp_118, temp_117);
    // 0x000448: 0x5080000000470505 Mufu
    temp_120 = 1.0 / temp_119;
    // 0x000450: 0x5C6810000057030D Fmul
    temp_121 = temp_104 * temp_120;
    // 0x000458: 0x5C6810000057020E Fmul
    temp_122 = temp_106 * temp_120;
    // 0x000468: 0xD832024020170000 Texs
    temp_123 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyzw;
    temp_124 = temp_123.x;
    temp_125 = temp_123.y;
    temp_126 = temp_123.z;
    temp_127 = temp_123.w;
    // 0x000470: 0x5C6910000057040F Fmul
    temp_128 = 0.0 - temp_120;
    temp_129 = temp_108 * temp_128;
    // 0x000478: 0xE043FF9000B7FF04 Ipa
    temp_130 = in_attr8.x;
    // 0x000488: 0x4C58301805C71622 Fadd
    temp_131 = 0.0 - fp_c6.data[23].x;
    temp_132 = temp_74 + temp_131;
    // 0x000490: 0xE043FF9040B7FF05 Ipa
    temp_133 = in_attr8.y;
    // 0x000498: 0xC1BA0143F2170C0C Tex
    temp_134 = textureLod(fp_t_tcb_14, vec4(temp_121, temp_122, temp_129, float(1)), temp_82).xyz;
    temp_135 = temp_134.x;
    temp_136 = temp_134.y;
    temp_137 = temp_134.z;
    // 0x0004A8: 0xC0BA0163EFF70808 Tex
    temp_138 = textureLod(fp_t_tcb_16, vec3(temp_101, temp_102, temp_110), 0.0).xyz;
    temp_139 = temp_138.x;
    temp_140 = temp_138.y;
    temp_141 = temp_138.z;
    // 0x0004B0: 0xDEBA0000C1B70404 TexB
    temp_142 = texture(fp_t_cb7_20, vec3(temp_130, temp_133, temp_80)).x;
    // 0x0004B8: 0xD822020201E71F1E Texs
    temp_143 = texture(fp_t_tcb_20, vec2(temp_32, temp_34)).xyz;
    temp_144 = temp_143.x;
    temp_145 = temp_143.y;
    temp_146 = temp_143.z;
    // 0x0004C8: 0x4C58301805D71123 Fadd
    temp_147 = 0.0 - fp_c6.data[23].y;
    temp_148 = temp_76 + temp_147;
    // 0x0004D0: 0x5C68100002272225 Fmul
    temp_149 = temp_132 * temp_132;
    // 0x0004D8: 0x4C58301805E71524 Fadd
    temp_150 = 0.0 - fp_c6.data[23].z;
    temp_151 = temp_78 + temp_150;
    // 0x0004E8: 0x385D103F80071414 Fadd
    temp_152 = 0.0 - temp_8;
    temp_153 = temp_152 + 1.0;
    temp_154 = clamp(temp_153, 0.0, 1.0);
    // 0x0004F0: 0x59A0128002372325 Ffma
    temp_155 = fma(temp_148, temp_148, temp_149);
    // 0x0004F8: 0x59A0128002472425 Ffma
    temp_156 = fma(temp_151, temp_151, temp_155);
    // 0x000508: 0x5080000000572525 Mufu
    temp_157 = inversesqrt(temp_156);
    // 0x000510: 0x5C6810000257221C Fmul
    temp_158 = temp_132 * temp_157;
    // 0x000518: 0x5C68100002572323 Fmul
    temp_159 = temp_148 * temp_157;
    // 0x000528: 0x5C68100002572406 Fmul
    temp_160 = temp_151 * temp_157;
    // 0x000530: 0x01040DF760C7F022 Mov32i
    // 0x000538: 0x4C98079800A70024 Mov
    // 0x000548: 0x5C68100001C71616 Fmul
    temp_161 = temp_74 * temp_158;
    // 0x000550: 0x4C69101805C71C21 Fmul
    temp_162 = 0.0 - fp_c6.data[23].x;
    temp_163 = temp_158 * temp_162;
    // 0x000558: 0x5C68100001C71705 Fmul
    temp_164 = temp_85 * temp_158;
    // 0x000568: 0x4C59101800672424 Fadd
    temp_165 = 0.0 - fp_c6.data[2].z;
    temp_166 = temp_165 + fp_c6.data[1].z;
    // 0x000570: 0x59A00B000237110F Ffma
    temp_167 = fma(temp_76, temp_159, temp_161);
    // 0x000578: 0x49A1109805D72321 Ffma
    temp_168 = 0.0 - fp_c6.data[23].y;
    temp_169 = fma(temp_159, temp_168, temp_163);
    // 0x000588: 0x59A0028002371823 Ffma
    temp_170 = fma(temp_86, temp_159, temp_164);
    // 0x000590: 0x0103F0000007F011 Mov32i
    // 0x000598: 0x59A4078000671515 Ffma
    temp_171 = fma(temp_78, temp_160, temp_167);
    temp_172 = clamp(temp_171, 0.0, 1.0);
    // 0x0005A8: 0x49A5109805E70605 Ffma
    temp_173 = 0.0 - fp_c6.data[23].z;
    temp_174 = fma(temp_160, temp_173, temp_169);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x0005B0: 0x4C69101805C7170F Fmul
    temp_176 = 0.0 - fp_c6.data[23].x;
    temp_177 = temp_85 * temp_176;
    // 0x0005B8: 0x59A411800067101C Ffma
    temp_178 = fma(temp_87, temp_160, temp_170);
    temp_179 = clamp(temp_178, 0.0, 1.0);
    // 0x0005C8: 0x51A40D0400071A17 Ffma
    temp_180 = fma(temp_68, temp_68, fp_c1.data[0].x);
    temp_181 = clamp(temp_180, 0.0, 1.0);
    // 0x0005D0: 0x3859103F80071A06 Fadd
    temp_182 = 0.0 - temp_68;
    temp_183 = temp_182 + 1.0;
    // 0x0005D8: 0x32A008BF00071A1A Ffma
    temp_184 = fma(temp_68, 0.5, 0.5);
    // 0x0005E8: 0x49A2110400A70516 Ffma
    temp_185 = fma(temp_175, fp_c1.data[2].z, -6.98316002);
    // 0x0005F0: 0x49A1079805D7181B Ffma
    temp_186 = 0.0 - fp_c6.data[23].y;
    temp_187 = fma(temp_86, temp_186, temp_177);
    // 0x0005F8: 0x49A2110400A71522 Ffma
    temp_188 = fma(temp_172, fp_c1.data[2].z, -6.98316002);
    // 0x000608: 0x5C6810000177170F Fmul
    temp_189 = temp_181 * temp_181;
    // 0x000610: 0x5C68100000670606 Fmul
    temp_190 = temp_183 * temp_183;
    // 0x000618: 0x5C68120001A71A1A Fmul
    temp_191 = temp_184 * 0.5;
    temp_192 = temp_191 * temp_184;
    // 0x000628: 0x5C68100001670505 Fmul
    temp_193 = temp_175 * temp_185;
    // 0x000630: 0x49A50D9805E71010 Ffma
    temp_194 = 0.0 - fp_c6.data[23].z;
    temp_195 = fma(temp_87, temp_194, temp_187);
    temp_196 = clamp(temp_195, 0.0, 1.0);
    // 0x000638: 0x5C68100002271516 Fmul
    temp_197 = temp_172 * temp_188;
    // 0x000648: 0x59A20E0000F71C15 Ffma
    temp_198 = 0.0 - temp_179;
    temp_199 = fma(temp_179, temp_189, temp_198);
    // 0x000650: 0x5C68100000670606 Fmul
    temp_200 = temp_190 * temp_190;
    // 0x000658: 0x1E23E468DB97190F Fmul32i
    temp_201 = temp_97 * 0.193900004;
    // 0x000668: 0x32A008BF00071811 Ffma
    temp_202 = fma(temp_86, 0.5, 0.5);
    // 0x000670: 0x59A10C8001A71918 Ffma
    temp_203 = 0.0 - temp_192;
    temp_204 = fma(temp_97, temp_203, temp_97);
    // 0x000678: 0x59A1080001A7101B Ffma
    temp_205 = 0.0 - temp_192;
    temp_206 = fma(temp_196, temp_205, temp_196);
    // 0x000688: 0x010410676C97F022 Mov32i
    // 0x000690: 0x51A00A8400971C1C Ffma
    temp_207 = fma(temp_179, temp_199, fp_c1.data[2].y);
    // 0x000698: 0x0104066978D7F015 Mov32i
    // 0x0006A8: 0x5080000000471C1C Mufu
    temp_208 = 1.0 / temp_207;
    // 0x0006B0: 0x49A007840017060F Ffma
    temp_209 = fma(temp_200, fp_c1.data[0].y, temp_201);
    // 0x0006B8: 0x5C58100001871A18 Fadd
    temp_210 = temp_192 + temp_204;
    // 0x0006C8: 0x5C58100001B71A1A Fadd
    temp_211 = temp_192 + temp_206;
    // 0x0006D0: 0x5080000000471818 Mufu
    temp_212 = 1.0 / temp_210;
    // 0x0006D8: 0x49A011040047191B Ffma
    temp_213 = fma(temp_97, fp_c1.data[1].x, 8.40400028);
    // 0x0006E8: 0x5080000000471A1A Mufu
    temp_214 = 1.0 / temp_211;
    // 0x0006F0: 0x0103E2CD9E87F021 Mov32i
    // 0x0006F8: 0x49A20A8400270615 Ffma
    temp_215 = fma(temp_200, fp_c1.data[0].z, -3.60299993);
    // 0x000708: 0x088BF05D63970F0F Fadd32i
    temp_216 = temp_209 + -0.522800028;
    // 0x000710: 0x4C98079809070022 Mov
    // 0x000718: 0x4C98079800970023 Mov
    // 0x000728: 0x51A00D840067191B Ffma
    temp_217 = fma(temp_97, temp_213, fp_c1.data[1].z);
    // 0x000730: 0x49A2108400770621 Ffma
    temp_218 = fma(temp_200, fp_c1.data[1].w, -0.168799996);
    // 0x000738: 0x51A00A8400370615 Ffma
    temp_219 = fma(temp_200, temp_215, fp_c1.data[0].w);
    // 0x000748: 0x5C68100000F7190F Fmul
    temp_220 = temp_97 * temp_216;
    // 0x000750: 0x51A1111809071922 Ffma
    temp_221 = 0.0 - fp_c6.data[36].x;
    temp_222 = fma(temp_97, temp_221, fp_c6.data[36].x);
    // 0x000758: 0x4C59101800572323 Fadd
    temp_223 = 0.0 - fp_c6.data[2].y;
    temp_224 = temp_223 + fp_c6.data[1].y;
    // 0x000768: 0x5080400000372222 Mufu
    temp_225 = abs(temp_222);
    temp_226 = log2(temp_225);
    // 0x000770: 0x51A00D840087191B Ffma
    temp_227 = fma(temp_97, temp_217, fp_c1.data[2].x);
    // 0x000778: 0x5C68100002170619 Fmul
    temp_228 = temp_200 * temp_218;
    // 0x000788: 0xE04BFF8F40B7FF21 Ipa
    temp_229 = in_attr7.y;
    temp_230 = clamp(temp_229, 0.0, 1.0);
    // 0x000790: 0x59A0078001570606 Ffma
    temp_231 = fma(temp_200, temp_219, temp_220);
    // 0x000798: 0x4C9807980087000F Mov
    // 0x0007A8: 0x5C68100001C71717 Fmul
    temp_232 = temp_181 * temp_208;
    // 0x0007B0: 0x5C60138001971B19 Fmnmx
    temp_233 = min(temp_227, temp_228);
    // 0x0007B8: 0x5C68120001A7181B Fmul
    temp_234 = temp_212 * 0.5;
    temp_235 = temp_234 * temp_214;
    // 0x0007C8: 0x4C59101800470F0F Fadd
    temp_236 = 0.0 - fp_c6.data[2].x;
    temp_237 = temp_236 + fp_c6.data[1].x;
    // 0x0007D0: 0x4C5C100400570606 Fadd
    temp_238 = temp_231 + fp_c1.data[1].y;
    temp_239 = clamp(temp_238, 0.0, 1.0);
    // 0x0007D8: 0x5C90008001670018 Rro
    // 0x0007E8: 0x4C6810180917221C Fmul
    temp_240 = temp_226 * fp_c6.data[36].y;
    // 0x0007F0: 0x5080000000271818 Mufu
    temp_241 = exp2(temp_197);
    // 0x0007F8: 0x4C98079809A70022 Mov
    // 0x000808: 0x51A0089800870F15 Ffma
    temp_242 = fma(temp_237, temp_202, fp_c6.data[2].x);
    // 0x000810: 0x51A008980097230F Ffma
    temp_243 = fma(temp_224, temp_202, fp_c6.data[2].y);
    // 0x000818: 0x51A0089800A72411 Ffma
    temp_244 = fma(temp_166, temp_202, fp_c6.data[2].z);
    // 0x000828: 0x010404000007F024 Mov32i
    // 0x000830: 0x5C90008001C70023 Rro
    // 0x000838: 0x5C6810000177171C Fmul
    temp_245 = temp_232 * temp_232;
    // 0x000848: 0x5084000000272323 Mufu
    temp_246 = exp2(temp_240);
    temp_247 = clamp(temp_246, 0.0, 1.0);
    // 0x000850: 0x4C58101408172222 Fadd
    temp_248 = fp_c6.data[38].z + fp_c5.data[32].y;
    // 0x000858: 0x5C5C30000FF71919 Fadd
    temp_249 = temp_233 + -0.0;
    temp_250 = clamp(temp_249, 0.0, 1.0);
    // 0x000868: 0x5C68100001C71B1A Fmul
    temp_251 = temp_235 * temp_245;
    // 0x000870: 0x5C68100001A7101A Fmul
    temp_252 = temp_196 * temp_251;
    // 0x000878: 0x5C68100002372217 Fmul
    temp_253 = temp_248 * temp_247;
    // 0x000888: 0x33A0124000072122 Ffma
    temp_254 = fma(temp_230, -2.0, 3.0);
    // 0x000890: 0x5C68100002172121 Fmul
    temp_255 = temp_230 * temp_230;
    // 0x000898: 0x5C68100002172216 Fmul
    temp_256 = temp_254 * temp_255;
    // 0x0008A8: 0x4C68101803771616 Fmul
    temp_257 = temp_256 * fp_c6.data[13].w;
    // 0x0008B0: 0xF0F0000034270000 Depbar
    // 0x0008B8: 0x4C58301407B7001C Fadd
    temp_258 = 0.0 - fp_c5.data[30].w;
    temp_259 = temp_124 + temp_258;
    // 0x0008C8: 0x49A0091808570C0C Ffma
    temp_260 = fma(temp_135, fp_c6.data[33].y, temp_112);
    // 0x0008D0: 0x49A0040400C71508 Ffma
    temp_261 = fma(temp_242, fp_c1.data[3].x, temp_139);
    // 0x0008D8: 0x49A0048400C70F09 Ffma
    temp_262 = fma(temp_243, fp_c1.data[3].x, temp_140);
    // 0x0008E8: 0x51A00E1407B70712 Ffma
    temp_263 = fma(temp_7, temp_259, fp_c5.data[30].w);
    // 0x0008F0: 0x4C6810180147100F Fmul
    temp_264 = temp_196 * fp_c6.data[5].x;
    // 0x0008F8: 0x5C9000800057001C Rro
    // 0x000908: 0x49A0050400C7110A Ffma
    temp_265 = fma(temp_244, fp_c1.data[3].x, temp_141);
    // 0x000910: 0x5080000000271C1C Mufu
    temp_266 = exp2(temp_193);
    // 0x000918: 0x4C58301407B70105 Fadd
    temp_267 = 0.0 - fp_c5.data[30].w;
    temp_268 = temp_125 + temp_267;
    // 0x000928: 0x59A10C0001871215 Ffma
    temp_269 = 0.0 - temp_241;
    temp_270 = fma(temp_263, temp_269, temp_241);
    // 0x000930: 0x4C58301407B70211 Fadd
    temp_271 = 0.0 - fp_c5.data[30].w;
    temp_272 = temp_126 + temp_271;
    // 0x000938: 0x1E23EA2F98370F1B Fmul32i
    temp_273 = temp_264 * 0.318309873;
    // 0x000948: 0x49A0099808570D0D Ffma
    temp_274 = fma(temp_136, fp_c6.data[33].y, temp_113);
    // 0x000950: 0x4C68101801571013 Fmul
    temp_275 = temp_196 * fp_c6.data[5].y;
    // 0x000958: 0x51A0029407B7070F Ffma
    temp_276 = fma(temp_7, temp_268, fp_c5.data[30].w);
    // 0x000968: 0x5C58100001571215 Fadd
    temp_277 = temp_263 + temp_270;
    // 0x000970: 0x51A0089407B70711 Ffma
    temp_278 = fma(temp_7, temp_272, fp_c5.data[30].w);
    // 0x000978: 0x4C68101801671010 Fmul
    temp_279 = temp_196 * fp_c6.data[5].z;
    // 0x000988: 0x49A00E9808570E0E Ffma
    temp_280 = fma(temp_137, fp_c6.data[33].y, temp_114);
    // 0x000990: 0x1E23EA2F9837131D Fmul32i
    temp_281 = temp_275 * 0.318309873;
    // 0x000998: 0x59A10E0001C71213 Ffma
    temp_282 = 0.0 - temp_266;
    temp_283 = fma(temp_263, temp_282, temp_266);
    // 0x0009A8: 0x59A10D8001B71505 Ffma
    temp_284 = 0.0 - temp_273;
    temp_285 = fma(temp_277, temp_284, temp_273);
    // 0x0009B0: 0x59A10C0001870F15 Ffma
    temp_286 = 0.0 - temp_241;
    temp_287 = fma(temp_276, temp_286, temp_241);
    // 0x0009B8: 0x59A10C000187111B Ffma
    temp_288 = 0.0 - temp_241;
    temp_289 = fma(temp_278, temp_288, temp_241);
    // 0x0009C8: 0x5C58300001970618 Fadd
    temp_290 = 0.0 - temp_250;
    temp_291 = temp_239 + temp_290;
    // 0x0009D0: 0x1E23EA2F98371021 Fmul32i
    temp_292 = temp_279 * 0.318309873;
    // 0x0009D8: 0x386C104248070F06 Fmul
    temp_293 = temp_276 * 50.0;
    temp_294 = clamp(temp_293, 0.0, 1.0);
    // 0x0009E8: 0x5C58100001570F10 Fadd
    temp_295 = temp_276 + temp_287;
    // 0x0009F0: 0x5C58100001B7111B Fadd
    temp_296 = temp_278 + temp_289;
    // 0x0009F8: 0x59A10E0001C70F15 Ffma
    temp_297 = 0.0 - temp_266;
    temp_298 = fma(temp_276, temp_297, temp_266);
    // 0x000A08: 0x59A10E0001C7111C Ffma
    temp_299 = 0.0 - temp_266;
    temp_300 = fma(temp_278, temp_299, temp_266);
    // 0x000A10: 0x5C68100000671919 Fmul
    temp_301 = temp_250 * temp_294;
    // 0x000A18: 0x59A10E8001D71006 Ffma
    temp_302 = 0.0 - temp_281;
    temp_303 = fma(temp_295, temp_302, temp_281);
    // 0x000A28: 0x59A1108002171B10 Ffma
    temp_304 = 0.0 - temp_292;
    temp_305 = fma(temp_296, temp_304, temp_292);
    // 0x000A30: 0x5C58100001570F1B Fadd
    temp_306 = temp_276 + temp_298;
    // 0x000A38: 0x5C58100001371215 Fadd
    temp_307 = temp_263 + temp_283;
    // 0x000A48: 0x5C58100001C7111C Fadd
    temp_308 = temp_278 + temp_300;
    // 0x000A50: 0x4C68101808C7171D Fmul
    temp_309 = temp_253 * fp_c6.data[35].x;
    // 0x000A58: 0x59A00C8001870F0F Ffma
    temp_310 = fma(temp_276, temp_291, temp_301);
    // 0x000A68: 0x59A00C8001871111 Ffma
    temp_311 = fma(temp_278, temp_291, temp_301);
    // 0x000A70: 0x4C68101801571B1B Fmul
    temp_312 = temp_306 * fp_c6.data[5].y;
    // 0x000A78: 0x4C68101801471515 Fmul
    temp_313 = temp_307 * fp_c6.data[5].x;
    // 0x000A88: 0x4C68101801671C1C Fmul
    temp_314 = temp_308 * fp_c6.data[5].z;
    // 0x000A90: 0x59A00C8001871212 Ffma
    temp_315 = fma(temp_263, temp_291, temp_301);
    // 0x000A98: 0x4C68101808D71713 Fmul
    temp_316 = temp_253 * fp_c6.data[35].y;
    // 0x000AA8: 0x49A10E9408271D22 Ffma
    temp_317 = 0.0 - fp_c5.data[32].z;
    temp_318 = fma(temp_309, temp_317, temp_309);
    // 0x000AB0: 0x5C68100001B71A18 Fmul
    temp_319 = temp_252 * temp_312;
    // 0x000AB8: 0x5C68100001571A19 Fmul
    temp_320 = temp_252 * temp_313;
    // 0x000AC8: 0xE043FF8F00B7FF15 Ipa
    temp_321 = in_attr7.x;
    // 0x000AD0: 0x5C68100001C71A1C Fmul
    temp_322 = temp_252 * temp_314;
    // 0x000AD8: 0xE043FF8C80B7FF0B Ipa
    temp_323 = in_attr4.z;
    // 0x000AE8: 0x4C68101408271D1A Fmul
    temp_324 = temp_309 * fp_c5.data[32].z;
    // 0x000AF0: 0x4C68101808E71717 Fmul
    temp_325 = temp_253 * fp_c6.data[35].z;
    // 0x000AF8: 0x4C68101408271321 Fmul
    temp_326 = temp_316 * fp_c5.data[32].z;
    // 0x000B08: 0x49A1099408271313 Ffma
    temp_327 = 0.0 - fp_c5.data[32].z;
    temp_328 = fma(temp_316, temp_327, temp_316);
    // 0x000B10: 0x5C58100002270505 Fadd
    temp_329 = temp_285 + temp_318;
    // 0x000B18: 0x49A00D0400B71919 Ffma
    temp_330 = fma(temp_320, fp_c1.data[2].w, temp_324);
    // 0x000B28: 0x4C6810140827171B Fmul
    temp_331 = temp_325 * fp_c5.data[32].z;
    // 0x000B30: 0x49A10B9408271717 Ffma
    temp_332 = 0.0 - fp_c5.data[32].z;
    temp_333 = fma(temp_325, temp_332, temp_325);
    // 0x000B38: 0x5C58100001370606 Fadd
    temp_334 = temp_303 + temp_328;
    // 0x000B48: 0x5C58100000870505 Fadd
    temp_335 = temp_329 + temp_261;
    // 0x000B50: 0x49A20A180AD71408 Ffma
    temp_336 = 0.0 - temp_154;
    temp_337 = fma(temp_154, fp_c6.data[43].y, temp_336);
    // 0x000B58: 0x59A00C8000C71212 Ffma
    temp_338 = fma(temp_315, temp_260, temp_330);
    // 0x000B68: 0x49A20A180AC7140C Ffma
    temp_339 = 0.0 - temp_154;
    temp_340 = fma(temp_154, fp_c6.data[43].x, temp_339);
    // 0x000B70: 0x5C58100001771010 Fadd
    temp_341 = temp_305 + temp_333;
    // 0x000B78: 0x5C58100000970606 Fadd
    temp_342 = temp_334 + temp_262;
    // 0x000B88: 0x59A1028000570705 Ffma
    temp_343 = 0.0 - temp_335;
    temp_344 = fma(temp_7, temp_343, temp_335);
    // 0x000B90: 0x49A0108400B71818 Ffma
    temp_345 = fma(temp_319, fp_c1.data[2].w, temp_326);
    // 0x000B98: 0x49A20A180AE71414 Ffma
    temp_346 = 0.0 - temp_154;
    temp_347 = fma(temp_154, fp_c6.data[43].z, temp_346);
    // 0x000BA8: 0x3858103F80070C09 Fadd
    temp_348 = temp_340 + 1.0;
    // 0x000BB0: 0x49A00D8400B71C1B Ffma
    temp_349 = fma(temp_322, fp_c1.data[2].w, temp_331);
    // 0x000BB8: 0x5C58100000A7100A Fadd
    temp_350 = temp_341 + temp_265;
    // 0x000BC8: 0x3858103F80070808 Fadd
    temp_351 = temp_337 + 1.0;
    // 0x000BD0: 0x59A00C0000D70F0F Ffma
    temp_352 = fma(temp_310, temp_274, temp_345);
    // 0x000BD8: 0x59A1030000670706 Ffma
    temp_353 = 0.0 - temp_342;
    temp_354 = fma(temp_7, temp_353, temp_342);
    // 0x000BE8: 0x59A4048000970009 Ffma
    temp_355 = fma(temp_124, temp_348, temp_348);
    temp_356 = clamp(temp_355, 0.0, 1.0);
    // 0x000BF0: 0x59A0090000570000 Ffma
    temp_357 = fma(temp_124, temp_344, temp_338);
    // 0x000BF8: 0x3858103F80071414 Fadd
    temp_358 = temp_347 + 1.0;
    // 0x000C08: 0x4C9807980B470005 Mov
    // 0x000C10: 0x59A00D8000E71111 Ffma
    temp_359 = fma(temp_311, temp_280, temp_349);
    // 0x000C18: 0x59A1050000A70707 Ffma
    temp_360 = 0.0 - temp_350;
    temp_361 = fma(temp_7, temp_360, temp_350);
    // 0x000C28: 0x59A4040000870108 Ffma
    temp_362 = fma(temp_125, temp_351, temp_351);
    temp_363 = clamp(temp_362, 0.0, 1.0);
    // 0x000C30: 0x49A50A980BC70415 Ffma
    temp_364 = 0.0 - fp_c6.data[47].x;
    temp_365 = fma(temp_142, temp_364, temp_321);
    temp_366 = clamp(temp_365, 0.0, 1.0);
    // 0x000C38: 0x59A0078000670101 Ffma
    temp_367 = fma(temp_125, temp_354, temp_352);
    // 0x000C48: 0x5080000000371515 Mufu
    temp_368 = log2(temp_366);
    // 0x000C50: 0x59A40A0001470214 Ffma
    temp_369 = fma(temp_126, temp_358, temp_358);
    temp_370 = clamp(temp_369, 0.0, 1.0);
    // 0x000C58: 0x4C98079802870004 Mov
    // 0x000C68: 0x51A202980B471E1E Ffma
    temp_371 = 0.0 - fp_c6.data[45].x;
    temp_372 = fma(temp_144, fp_c6.data[45].x, temp_371);
    // 0x000C70: 0x51A202980B471F1F Ffma
    temp_373 = 0.0 - fp_c6.data[45].x;
    temp_374 = fma(temp_145, fp_c6.data[45].x, temp_373);
    // 0x000C78: 0x51A202980B472020 Ffma
    temp_375 = 0.0 - fp_c6.data[45].x;
    temp_376 = fma(temp_146, fp_c6.data[45].x, temp_375);
    // 0x000C88: 0x59A0088000770202 Ffma
    temp_377 = fma(temp_126, temp_361, temp_359);
    // 0x000C90: 0x4C98079802970006 Mov
    // 0x000C98: 0x4C98079802A70005 Mov
    // 0x000CA8: 0x5C68100000070900 Fmul
    temp_378 = temp_356 * temp_357;
    // 0x000CB0: 0x51A0021802871E1E Ffma
    temp_379 = fma(temp_372, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x000CB8: 0x5C68100000170801 Fmul
    temp_380 = temp_363 * temp_367;
    // 0x000CC8: 0x5C68100000271402 Fmul
    temp_381 = temp_370 * temp_377;
    // 0x000CD0: 0x51A0031802971F1F Ffma
    temp_382 = fma(temp_374, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x000CD8: 0x51A0029802A72020 Ffma
    temp_383 = fma(temp_376, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x000CE8: 0x4C68101803171515 Fmul
    temp_384 = temp_368 * fp_c6.data[12].y;
    // 0x000CF0: 0x5C58300001E70004 Fadd
    temp_385 = 0.0 - temp_379;
    temp_386 = temp_378 + temp_385;
    // 0x000CF8: 0x49A20B1803471607 Ffma
    temp_387 = 0.0 - temp_257;
    temp_388 = fma(temp_257, fp_c6.data[13].x, temp_387);
    // 0x000D08: 0x49A20B1803571608 Ffma
    temp_389 = 0.0 - temp_257;
    temp_390 = fma(temp_257, fp_c6.data[13].y, temp_389);
    // 0x000D10: 0x5C58300001F70105 Fadd
    temp_391 = 0.0 - temp_382;
    temp_392 = temp_380 + temp_391;
    // 0x000D18: 0x5C58300002070206 Fadd
    temp_393 = 0.0 - temp_383;
    temp_394 = temp_381 + temp_393;
    // 0x000D28: 0x49A20B1803671609 Ffma
    temp_395 = 0.0 - temp_257;
    temp_396 = fma(temp_257, fp_c6.data[13].z, temp_395);
    // 0x000D30: 0x49A00F180BF70404 Ffma
    temp_397 = fma(temp_386, fp_c6.data[47].w, temp_379);
    // 0x000D38: 0x5C9000800157000A Rro
    // 0x000D48: 0x49A00F980BF70505 Ffma
    temp_398 = fma(temp_392, fp_c6.data[47].w, temp_382);
    // 0x000D50: 0x5080000000270A0A Mufu
    temp_399 = exp2(temp_384);
    // 0x000D58: 0x49A010180BF70606 Ffma
    temp_400 = fma(temp_394, fp_c6.data[47].w, temp_383);
    // 0x000D68: 0x5C60178000471E04 Fmnmx
    temp_401 = max(temp_379, temp_397);
    // 0x000D70: 0x5C60178000571F05 Fmnmx
    temp_402 = max(temp_382, temp_398);
    // 0x000D78: 0x5C60178000672006 Fmnmx
    temp_403 = max(temp_383, temp_400);
    // 0x000D88: 0x59A0020000770407 Ffma
    temp_404 = fma(temp_401, temp_388, temp_401);
    // 0x000D90: 0x59A0028000870504 Ffma
    temp_405 = fma(temp_402, temp_390, temp_402);
    // 0x000D98: 0x4C58100C03870B08 Fadd
    temp_406 = temp_323 + fp_c3.data[14].x;
    // 0x000DA8: 0x59A0030000970609 Ffma
    temp_407 = fma(temp_403, temp_396, temp_403);
    // 0x000DB0: 0x5C59100000770005 Fadd
    temp_408 = 0.0 - temp_378;
    temp_409 = temp_408 + temp_404;
    // 0x000DB8: 0x4C68101802B70A06 Fmul
    temp_410 = temp_399 * fp_c6.data[10].w;
    // 0x000DC8: 0x5C59100000470104 Fadd
    temp_411 = 0.0 - temp_380;
    temp_412 = temp_411 + temp_405;
    // 0x000DD0: 0x5C59100000970207 Fadd
    temp_413 = 0.0 - temp_381;
    temp_414 = temp_413 + temp_407;
    // 0x000DD8: 0x59A0000000670500 Ffma
    temp_415 = fma(temp_409, temp_410, temp_378);
    // 0x000DE8: 0x0103F6000007F005 Mov32i
    // 0x000DF0: 0x59A0008000670401 Ffma
    temp_416 = fma(temp_412, temp_410, temp_380);
    // 0x000DF8: 0x49A37F8C03C70804 Ffma
    temp_417 = 0.0 - fp_c3.data[15].x;
    temp_418 = fma(temp_406, temp_417, -0.0);
    // 0x000E08: 0x59A0010000670702 Ffma
    temp_419 = fma(temp_414, temp_410, temp_381);
    // 0x000E10: 0x5C9807800FF70006 Mov
    // 0x000E18: 0x5C98078000370007 Mov
    // 0x000E28: 0xE30000000007000F Exit
    out_attr0.x = temp_415;
    out_attr0.y = temp_416;
    out_attr0.z = temp_419;
    out_attr0.w = temp_127;
    out_attr1.x = temp_418;
    out_attr1.y = 0.875;
    out_attr1.z = 0.0;
    out_attr1.w = temp_127;
    return;
}
